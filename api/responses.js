// Vercel Serverless Function & Node Handler: Inbound Response Center (Alvora Tech)
import fs from "fs";
import path from "path";
import { exec } from "child_process";

const OUTREACH_DIR = path.join(process.cwd(), "outreach");
const CSV_PATH = path.join(OUTREACH_DIR, "leads_alvoratech.csv");
const RESPONSES_PATH = path.join(OUTREACH_DIR, "responses.json");

function loadStoredResponses() {
  if (fs.existsSync(RESPONSES_PATH)) {
    try {
      const data = fs.readFileSync(RESPONSES_PATH, "utf-8");
      return JSON.parse(data || "[]");
    } catch {
      return [];
    }
  }
  return [];
}

function saveStoredResponses(responses) {
  try {
    fs.writeFileSync(RESPONSES_PATH, JSON.stringify(responses, null, 2), "utf-8");
  } catch (e) {
    console.warn("Notice saving responses:", e.message);
  }
}

export default async function handler(req, res) {
  req.query = req.query || {};
  req.body = req.body || {};

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // 1. GET ALL INBOUND RESPONSES
  if (req.method === "GET") {
    const stored = loadStoredResponses();

    const pythonScript = `
import imaplib, ssl, json, os, sys
try:
    mail = imaplib.IMAP4_SSL('imap.zoho.com', 993, timeout=5)
    pwd = os.environ.get('ZOHO_PASSWORD') or 'Face123@@book@@'
    mail.login('lucas@alvoratechhq.com', pwd)
    status, counts = mail.select('INBOX', readonly=True)
    mail.logout()
    print(json.dumps({'imap_enabled': True, 'count': int(counts[0].decode())}))
except Exception as e:
    print(json.dumps({'imap_enabled': False, 'error': str(e)}))
`;

    exec(`python -c "${pythonScript.replace(/"/g, '\\"')}"`, { env: process.env, timeout: 6000 }, (err, stdout) => {
      let imapStatus = { imap_enabled: false };
      try {
        if (stdout) {
          imapStatus = JSON.parse(stdout.trim());
        }
      } catch {
        // ignore parse error
      }

      return res.status(200).json({
        success: true,
        agency: "alvoratech",
        master_inbound_email: "lucas@alvoratechhq.com",
        imap_enabled: Boolean(imapStatus.imap_enabled),
        unread_count: stored.length,
        replies: stored,
        notice: imapStatus.imap_enabled
          ? "Zoho IMAP active: streaming incoming prospect replies."
          : "All prospect replies route to lucas@alvoratechhq.com automatically. To stream incoming messages directly into this dashboard feed, toggle IMAP ON in Zoho Mail settings -> Email Accounts -> IMAP Access.",
      });
    });
    return;
  }

  // 2. POST: RECORD A REPLY OR LOG INBOUND NOTE
  if (req.method === "POST") {
    const { email, business_name, message, channel = "Email", sentiment = "interested" } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, error: "Prospect email is required." });
    }

    const stored = loadStoredResponses();
    const newReply = {
      id: `reply-${Date.now()}`,
      email: email.toLowerCase().trim(),
      business_name: business_name || "Valued Prospect",
      message: message || "Prospect expressed interest in website demo.",
      channel: channel,
      sentiment: sentiment,
      received_at: new Date().toISOString(),
    };

    stored.unshift(newReply);
    saveStoredResponses(stored);

    if (fs.existsSync(CSV_PATH)) {
      try {
        const content = fs.readFileSync(CSV_PATH, "utf-8");
        const lines = content.split("\n");
        const updated = lines.map((line) => {
          if (line.toLowerCase().includes(email.toLowerCase().trim())) {
            return line.replace(/,pending,|,sent,|,delivered,/i, ",replied,");
          }
          return line;
        });
        fs.writeFileSync(CSV_PATH, updated.join("\n"), "utf-8");
      } catch (csvErr) {
        console.warn("Notice updating CSV lead status:", csvErr.message);
      }
    }

    return res.status(200).json({
      success: true,
      message: `Inbound response recorded for ${email}. Lead status set to 'replied'.`,
      reply: newReply,
    });
  }
}
