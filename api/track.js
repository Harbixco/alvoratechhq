// Vercel Serverless Function & Node Handler: Email Open & Click Tracking Engine for Alvora Tech
import { MongoClient } from "mongodb";

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://agbajeabiodunkay_db_user:8sh9sZDp89t6sBkU@veltrix-leads.plfrnll.mongodb.net/veltrix_leads?retryWrites=true&w=majority";

const DB_NAME = "veltrix_leads";
const COLLECTION_NAME = "alvoratech_tracking";

// 1x1 transparent GIF buffer
const PIXEL_BUFFER = Buffer.from(
  "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  "base64"
);

let cachedClient = null;

async function getDb() {
  if (!cachedClient) {
    cachedClient = new MongoClient(MONGODB_URI, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
    });
    await cachedClient.connect();
  }
  return cachedClient.db(DB_NAME);
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

  const { email, biz, action = "open", url, stats } = req.query;

  // 1. STATS ENDPOINT: Return aggregated open & click analytics for Alvora Tech dashboard
  if (stats === "true" || req.query.mode === "stats") {
    try {
      const db = await getDb();
      const col = db.collection(COLLECTION_NAME);
      const records = await col
        .find({})
        .sort({ last_activity_at: -1 })
        .limit(100)
        .toArray();

      let unique_opened = 0;
      let total_opens = 0;
      let unique_clicked = 0;
      let total_clicks = 0;

      for (const r of records) {
        if (r.open_count > 0) unique_opened++;
        total_opens += r.open_count || 0;
        if (r.click_count > 0) unique_clicked++;
        total_clicks += r.click_count || 0;
      }

      return res.status(200).json({
        success: true,
        agency: "alvoratech",
        summary: {
          unique_opened,
          total_opens,
          unique_clicked,
          total_clicks,
          total_tracked_leads: records.length,
        },
        records,
      });
    } catch (err) {
      console.error("Tracking stats fetch error:", err);
      return res.status(200).json({
        success: true,
        agency: "alvoratech",
        summary: {
          unique_opened: 0,
          total_opens: 0,
          unique_clicked: 0,
          total_clicks: 0,
          total_tracked_leads: 0,
        },
        records: [],
      });
    }
  }

  // 2. CLICK TRACKING: Record click and redirect to destination demo URL
  if (action === "click" && url) {
    let targetUrl = decodeURIComponent(url);
    if (!targetUrl.startsWith("http://") && !targetUrl.startsWith("https://")) {
      targetUrl = "https://alvoratechhq.com";
    }
    if (email) {
      try {
        const db = await getDb();
        const col = db.collection(COLLECTION_NAME);
        const now = new Date();

        await col.updateOne(
          { email: email.toLowerCase().trim() },
          {
            $set: {
              email: email.toLowerCase().trim(),
              business_name: biz || "Prospect",
              agency: "alvoratech",
              last_clicked_at: now,
              last_activity_at: now,
              target_url: targetUrl,
            },
            $setOnInsert: {
              first_tracked_at: now,
              open_count: 0,
            },
            $inc: { click_count: 1 },
          },
          { upsert: true }
        );
      } catch (err) {
        console.error("Click tracking error:", err);
      }
    }
    return res.redirect(302, targetUrl);
  }

  // 3. OPEN TRACKING: Record open and serve transparent 1x1 GIF
  if (email) {
    try {
      const db = await getDb();
      const col = db.collection(COLLECTION_NAME);
      const now = new Date();
      const ip = req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "unknown";
      const userAgent = req.headers["user-agent"] || "unknown";

      await col.updateOne(
        { email: email.toLowerCase().trim() },
        {
          $set: {
            email: email.toLowerCase().trim(),
            business_name: biz || "Prospect",
            agency: "alvoratech",
            last_opened_at: now,
            last_activity_at: now,
            last_ip: typeof ip === "string" ? ip.split(",")[0].trim() : "unknown",
            last_user_agent: userAgent,
          },
          $setOnInsert: {
            first_opened_at: now,
            first_tracked_at: now,
            click_count: 0,
          },
          $inc: { open_count: 1 },
        },
        { upsert: true }
      );
    } catch (err) {
      console.error("Open tracking error:", err);
    }
  }

  // Always return the transparent 1x1 pixel with zero-caching headers
  res.setHeader("Content-Type", "image/gif");
  res.setHeader("Content-Length", PIXEL_BUFFER.length);
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  return res.status(200).send(PIXEL_BUFFER);
}
