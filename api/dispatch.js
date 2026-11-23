// Vercel Serverless Function & Node Handler: Automated Pitching Dispatch Trigger for Alvora Tech
import { spawn } from "child_process";
import fs from "fs";
import path from "path";

const OUTREACH_DIR = path.join(process.cwd(), "outreach");
const SCRIPT_PATH = path.join(OUTREACH_DIR, "send_outreach.py");
const LOG_PATH = path.join(OUTREACH_DIR, "outreach.log");
const CSV_PATH = path.join(OUTREACH_DIR, "leads_alvoratech.csv");

let activeProcess = null;

function getLeadsProgress() {
  let total = 0;
  let sent = 0;
  let pending = 0;
  let failed = 0;
  let lastSentLead = null;

  if (fs.existsSync(CSV_PATH)) {
    try {
      const content = fs.readFileSync(CSV_PATH, "utf-8");
      const lines = content.split("\n").filter(Boolean);
      for (let i = 1; i < lines.length; i++) {
        total++;
        const line = lines[i];
        const low = line.toLowerCase();
        if (low.includes(",sent,") || low.endsWith(",sent") || low.includes('"sent"')) {
          sent++;
          const parts = line.split(",");
          lastSentLead = {
            business_name: (parts[0] || "").replace(/"/g, "").trim(),
            email: (parts[2] || "").replace(/"/g, "").trim(),
            sent_by: (parts[8] || "").replace(/"/g, "").trim(),
          };
        } else if (low.includes(",failed,") || low.endsWith(",failed") || low.includes('"failed"')) {
          failed++;
        } else {
          pending++;
        }
      }
    } catch (e) {
      console.warn("Notice reading leads CSV:", e.message);
    }
  }

  const percent = total > 0 ? Math.round((sent / total) * 100) : 0;
  return { total, sent, pending, failed, percent, lastSentLead };
}

function getLogProgress(logTail) {
  let currentStep = "";
  let currentSender = "";
  let currentRecipient = "";
  let statusDetail = "Engine Standby: 3 Zoho Mailboxes Ready (Lucas, James, Oliver)";
  let isDelaying = false;
  let delaySeconds = 0;

  for (let i = logTail.length - 1; i >= 0; i--) {
    const line = logTail[i];
    if (!currentStep && line.match(/\[(\d+\/\d+)\]/)) {
      const match = line.match(/\[(\d+\/\d+)\]/);
      currentStep = match ? match[1] : "";
    }
    if (!currentSender && line.includes("Sending pitch to")) {
      const match = line.match(/Sending pitch to (.*?) via (.*?)\.\.\./i);
      if (match) {
        currentRecipient = match[1];
        currentSender = match[2];
      }
    }
    if (!isDelaying && (line.includes("Waiting") || line.includes("Sleeping"))) {
      isDelaying = true;
      const match = line.match(/(?:Waiting|Sleeping) (\d+) seconds/i);
      if (match) delaySeconds = parseInt(match[1], 10);
      statusDetail = `Sleeping ${delaySeconds}s to maintain human rhythm and protect sender score`;
    }
    if (line.includes("SUCCESS: Sent to")) {
      if (!isDelaying) statusDetail = "Pitch delivered successfully";
    }
    if (line.includes("Outreach batch completed") || line.includes("ALVORA DISPATCH FINISHED")) {
      statusDetail = "Outreach batch complete: all allocated emails dispatched";
    }
  }

  return { currentStep, currentSender, currentRecipient, statusDetail, isDelaying, delaySeconds };
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

  // 1. STATUS & PROGRESS CHECK
  if (req.query.status === "true" || req.query.status === true || req.method === "GET") {
    let logTail = [];
    if (fs.existsSync(LOG_PATH)) {
      try {
        const fullLog = fs.readFileSync(LOG_PATH, "utf-8");
        logTail = fullLog.split("\n").filter(Boolean).slice(-20);
      } catch (e) {
        logTail = [e.message];
      }
    }

    const leadsProgress = getLeadsProgress();
    const logProgress = getLogProgress(logTail);
    const isRunning = activeProcess !== null;
    const isCompleted = !isRunning && leadsProgress.sent > 0 && leadsProgress.pending === 0;

    return res.status(200).json({
      success: true,
      agency: "alvoratech",
      isRunning,
      isCompleted,
      progress: {
        ...leadsProgress,
        ...logProgress,
      },
      lastLogs: logTail,
    });
  }

  // 2. TRIGGER LIVE DISPATCH
  const mode = req.body?.mode || req.query.mode || "send";
  const recipient = req.body?.recipient || req.query.recipient || "";

  if (activeProcess !== null) {
    const leadsProgress = getLeadsProgress();
    return res.status(200).json({
      success: true,
      message: "Alvora Tech outreach engine is already running in background.",
      isRunning: true,
      progress: leadsProgress,
    });
  }

  try {
    const args = ["send_outreach.py"];
    if (mode === "dry-run") {
      args.push("--dry-run");
    } else if (mode === "test") {
      args.push("--test", recipient || "info@alvoratechhq.com");
    } else {
      args.push("--send");
    }

    const logStream = fs.createWriteStream(LOG_PATH, { flags: "a" });
    const timestamp = new Date().toISOString();
    logStream.write(`\n=== ALVORA DISPATCH STARTED AT ${timestamp} (mode: ${mode}) ===\n`);

    const env = {
      ...process.env,
      ZOHO_PASSWORD: process.env.ZOHO_PASSWORD || "Face123@@book@@",
      PYTHONUNBUFFERED: "1",
      PYTHONIOENCODING: "utf-8",
    };

    activeProcess = spawn("python", args, {
      cwd: OUTREACH_DIR,
      shell: true,
      env: env,
    });

    activeProcess.stdout.pipe(logStream, { end: false });
    activeProcess.stderr.pipe(logStream, { end: false });

    activeProcess.on("error", (err) => {
      logStream.write(`\n=== ALVORA PROCESS ERROR: ${err.message} ===\n`);
      activeProcess = null;
    });

    activeProcess.on("close", (code) => {
      logStream.write(`\n=== ALVORA DISPATCH FINISHED AT ${new Date().toISOString()} (exit code: ${code}) ===\n`);
      logStream.end();
      activeProcess = null;
    });

    const initialProgress = getLeadsProgress();

    return res.status(200).json({
      success: true,
      agency: "alvoratech",
      message: `Alvora Tech outreach engine launched in background (mode: ${mode}). Emails rotating across Lucas, James, and Oliver.`,
      isRunning: true,
      progress: initialProgress,
    });
  } catch (err) {
    console.error("Failed to launch Alvora outreach runner:", err);
    activeProcess = null;
    return res.status(500).json({ success: false, error: err.message });
  }
}
