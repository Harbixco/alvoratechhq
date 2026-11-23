// Vercel Serverless Function & Node Handler: Automated US Lead Extraction for Alvora Tech
import { MongoClient } from "mongodb";
import fs from "fs";
import path from "path";

const GOOGLE_PLACES_KEY =
  process.env.GOOGLE_PLACES_API_KEY || "AIzaSyB0pWJjUV6yBFuefNKZtFsh86v6yIEspLo";

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://agbajeabiodunkay_db_user:8sh9sZDp89t6sBkU@veltrix-leads.plfrnll.mongodb.net/veltrix_leads?retryWrites=true&w=majority";

const DB_NAME = "veltrix_leads";
const COLLECTION_NAME = "alvoratech_leads";
const CSV_PATH = path.join(process.cwd(), "outreach", "leads_alvoratech.csv");

const NICHES = {
  cleaning: {
    keywords: ["commercial cleaning services", "office janitorial company", "cleaning service contractors"],
    demo_url: "https://alvoratechhq.com/cleaning",
  },
  painting: {
    keywords: ["painting contractors", "residential house painters", "commercial painting company"],
    demo_url: "https://alvoratechhq.com/painting",
  },
  "plumbing-services": {
    keywords: ["commercial plumbing contractor", "emergency plumbing repair", "plumbing and drain specialists"],
    demo_url: "https://alvoratechhq.com/plumbing-services",
  },
  "auto-repair": {
    keywords: ["auto repair shop", "collision repair center", "transmission and brake repair"],
    demo_url: "https://alvoratechhq.com/auto-repair",
  },
  contractor: {
    keywords: ["general contractor", "home remodeling company", "commercial building construction"],
    demo_url: "https://alvoratechhq.com/contractor",
  },
  "dental-care": {
    keywords: ["family dental clinic", "cosmetic dentist practice", "dental care center"],
    demo_url: "https://alvoratechhq.com/dental-care",
  },
  "personal-injury": {
    keywords: ["personal injury law firm", "accident and injury attorneys", "injury lawyer practice"],
    demo_url: "https://alvoratechhq.com/personal-injury",
  },
  "towing-company": {
    keywords: ["towing and recovery service", "emergency roadside assistance", "flatbed towing company"],
    demo_url: "https://alvoratechhq.com/towing-company",
  },
  "tree-removal": {
    keywords: ["tree removal service", "certified arborist tree care", "tree trimming and pruning company"],
    demo_url: "https://alvoratechhq.com/tree-removal",
  },
  electrical: {
    keywords: ["licensed electrical contractors", "commercial electrician services", "residential electrical repair"],
    demo_url: "https://alvoratechhq.com/electrical",
  },
  flooring: {
    keywords: ["flooring installation contractors", "epoxy flooring specialists", "hardwood and tile flooring"],
    demo_url: "https://alvoratechhq.com/flooring",
  },
  landscaping: {
    keywords: ["landscape design and maintenance", "commercial landscaping contractors", "hardscaping and lawn care"],
    demo_url: "https://alvoratechhq.com/landscaping",
  },
  locksmith: {
    keywords: ["commercial locksmith services", "mobile emergency locksmith", "lock and key specialists"],
    demo_url: "https://alvoratechhq.com/locksmith",
  },
  "pest-control": {
    keywords: ["pest control exterminators", "termite inspection and treatment", "commercial pest management"],
    demo_url: "https://alvoratechhq.com/pest-control",
  },
  "pressure-demo": {
    keywords: ["pressure washing company", "commercial power washing", "exterior building and roof wash"],
    demo_url: "https://alvoratechhq.com/pressure-demo",
  },
};

const LOCATIONS = [
  { state: "TX", city: "Houston", districts: ["Downtown", "Heights", "Katy", "Sugar Land"] },
  { state: "TX", city: "Dallas", districts: ["North Dallas", "Plano", "Frisco", "Fort Worth"] },
  { state: "TX", city: "Austin", districts: ["Downtown", "Round Rock", "Cedar Park"] },
  { state: "FL", city: "Miami", districts: ["Brickell", "Coral Gables", "Doral", "Kendall"] },
  { state: "FL", city: "Orlando", districts: ["Downtown", "Winter Park", "Kissimmee"] },
  { state: "FL", city: "Tampa", districts: ["Downtown", "St. Petersburg", "Clearwater"] },
  { state: "CA", city: "Los Angeles", districts: ["Pasadena", "Glendale", "Long Beach", "Torrance"] },
  { state: "CA", city: "San Diego", districts: ["Downtown", "La Jolla", "Chula Vista"] },
  { state: "GA", city: "Atlanta", districts: ["Buckhead", "Alpharetta", "Marietta", "Decatur"] },
  { state: "AZ", city: "Phoenix", districts: ["Scottsdale", "Mesa", "Chandler", "Tempe"] },
  { state: "CO", city: "Denver", districts: ["Downtown", "Aurora", "Lakewood", "Boulder"] },
  { state: "NC", city: "Charlotte", districts: ["Uptown", "South End", "Ballantyne", "Matthews"] },
  { state: "WA", city: "Seattle", districts: ["Bellevue", "Kirkland", "Renton", "Redmond"] },
  { state: "IL", city: "Chicago", districts: ["Naperville", "Schaumburg", "Evanston"] },
];

let cachedClient = null;
async function getDb() {
  if (!cachedClient) {
    cachedClient = new MongoClient(MONGODB_URI, { maxPoolSize: 10, serverSelectionTimeoutMS: 5000 });
    await cachedClient.connect();
  }
  return cachedClient.db(DB_NAME);
}

async function scrapeEmailsFromWebsite(websiteUrl) {
  if (!websiteUrl) return [];
  const emails = new Set();
  const testUrls = [websiteUrl];

  try {
    const parsed = new URL(websiteUrl);
    const base = `${parsed.protocol}//${parsed.host}`;
    testUrls.push(`${base}/contact`, `${base}/contact-us`, `${base}/about`);
  } catch {
    return [];
  }

  for (const u of testUrls) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 4000);
      const resp = await fetch(u, {
        headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AlvoraScraper/1.0" },
        signal: controller.signal,
      });
      clearTimeout(timeout);

      if (!resp.ok) continue;
      const html = await resp.text();

      const mailtos = html.match(/mailto:([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)/gi) || [];
      for (const m of mailtos) {
        const clean = cleanEmail(m.replace(/^mailto:/i, ""));
        if (clean) emails.add(clean);
      }

      const matches = html.match(/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/g) || [];
      for (const e of matches) {
        const clean = cleanEmail(e);
        if (clean) emails.add(clean);
      }

      if (emails.size > 0) break;
    } catch {
      continue;
    }
  }

  return Array.from(emails);
}

function cleanEmail(e) {
  if (!e) return null;
  e = e.trim().replace(/[.,;:)'"]+$/, "");
  const low = e.toLowerCase();
  const badExts = [".png", ".jpg", ".jpeg", ".webp", ".svg", ".gif", ".css", ".js"];
  if (badExts.some((ext) => low.endsWith(ext))) return null;
  const badTerms = ["wixpress", "sentry", "example", "schema", "wordpress", "yourdomain", "domain.com"];
  if (badTerms.some((term) => low.includes(term))) return null;
  if (!e.includes("@") || !e.split("@")[1].includes(".")) return null;
  return e;
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

  // 1. GET ALL LEADS ENDPOINT (for frontend table)
  if (req.query.get_leads === "true" || req.query.get_leads === true) {
    try {
      const leadsMap = new Map();

      // Read local CSV if present
      if (fs.existsSync(CSV_PATH)) {
        try {
          const csvContent = fs.readFileSync(CSV_PATH, "utf-8");
          const lines = csvContent.split("\n").map((l) => l.trim()).filter(Boolean);
          for (let i = 1; i < lines.length; i++) {
            const parts = lines[i].split(",");
            if (parts.length >= 6) {
              const email = parts[2]?.replace(/"/g, "").trim();
              if (email) {
                leadsMap.set(email.toLowerCase(), {
                  id: `csv-${i}`,
                  business_name: parts[0]?.replace(/"/g, "").trim(),
                  contact_name: parts[1]?.replace(/"/g, "").trim() || "Operations Lead",
                  email: email,
                  niche: parts[3]?.replace(/"/g, "").trim() || "painting",
                  city: parts[4]?.replace(/"/g, "").trim() || "Houston, TX",
                  demo_url: parts[5]?.replace(/"/g, "").trim() || "https://alvoratechhq.com/painting",
                  status: parts[6]?.replace(/"/g, "").trim() || "pending",
                  sent_at: parts[7]?.replace(/"/g, "").trim() || "",
                  sent_by: parts[8]?.replace(/"/g, "").trim() || "",
                  source: "CSV Storage",
                });
              }
            }
          }
        } catch (csvErr) {
          console.warn("Notice reading CSV leads:", csvErr.message);
        }
      }

      // Read MongoDB leads if available
      try {
        const db = await getDb();
        const mongoLeads = await db
          .collection(COLLECTION_NAME)
          .find({})
          .sort({ createdAt: -1 })
          .limit(200)
          .toArray();

        for (const doc of mongoLeads) {
          if (doc.email) {
            const lowEmail = doc.email.toLowerCase().trim();
            leadsMap.set(lowEmail, {
              ...leadsMap.get(lowEmail),
              id: doc._id?.toString() || doc.id || lowEmail,
              business_name: doc.business_name || leadsMap.get(lowEmail)?.business_name,
              contact_name: doc.contact_name || leadsMap.get(lowEmail)?.contact_name || "Operations Lead",
              email: doc.email,
              phone: doc.phone || "",
              niche: doc.niche || leadsMap.get(lowEmail)?.niche || "painting",
              city: doc.city || leadsMap.get(lowEmail)?.city || "Houston, TX",
              demo_url: doc.demo_url || leadsMap.get(lowEmail)?.demo_url || "https://alvoratechhq.com/painting",
              status: doc.status || leadsMap.get(lowEmail)?.status || "pending",
              sent_at: doc.sent_at || leadsMap.get(lowEmail)?.sent_at || "",
              sent_by: doc.sent_by || leadsMap.get(lowEmail)?.sent_by || "",
              source: doc.source || "MongoDB Atlas",
              createdAt: doc.createdAt,
            });
          }
        }
      } catch (dbErr) {
        console.warn("MongoDB read notice (fallback to CSV):", dbErr.message);
      }

      const allLeads = Array.from(leadsMap.values());
      return res.status(200).json({
        success: true,
        agency: "alvoratech",
        count: allLeads.length,
        leads: allLeads,
      });
    } catch (err) {
      console.error("Error reading leads:", err);
      return res.status(500).json({ success: false, error: err.message });
    }
  }

  // 2. EXTRACTION ENDPOINT
  const targetCount = parseInt(req.query.count || req.body?.count || "10", 10);
  const targetNiche = req.query.niche || req.body?.niche || null;
  const targetCity = req.query.city || req.body?.city || null;

  try {
    const db = await getDb();
    const leadsCol = db.collection(COLLECTION_NAME);

    const existingDocs = await leadsCol.find({}, { projection: { email: 1 } }).toArray();
    const existingEmails = new Set(
      existingDocs.map((d) => (d.email || "").toLowerCase().trim()).filter(Boolean)
    );

    if (fs.existsSync(CSV_PATH)) {
      try {
        const csvContent = fs.readFileSync(CSV_PATH, "utf-8");
        const lines = csvContent.split("\n");
        for (let i = 1; i < lines.length; i++) {
          const parts = lines[i].split(",");
          if (parts[2]) {
            existingEmails.add(parts[2].replace(/"/g, "").trim().toLowerCase());
          }
        }
      } catch (e) {
        console.warn("Notice reading CSV:", e.message);
      }
    }

    const newlyExtracted = [];
    const nicheKeys = targetNiche && NICHES[targetNiche] ? [targetNiche] : Object.keys(NICHES);
    const locationPool = LOCATIONS.filter(
      (l) => !targetCity || l.city.toLowerCase() === targetCity.toLowerCase()
    );

    for (const nicheKey of nicheKeys) {
      if (newlyExtracted.length >= targetCount) break;
      const nicheInfo = NICHES[nicheKey];

      for (const loc of locationPool) {
        if (newlyExtracted.length >= targetCount) break;
        const city = `${loc.city}, ${loc.state}`;

        for (const district of loc.districts) {
          if (newlyExtracted.length >= targetCount) break;

          for (const keyword of nicheInfo.keywords.slice(0, 2)) {
            if (newlyExtracted.length >= targetCount) break;

            const queryText = `${keyword} in ${district} ${loc.city} ${loc.state} USA`;
            try {
              const placesUrl = "https://places.googleapis.com/v1/places:searchText";
              const placesResp = await fetch(placesUrl, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "X-Goog-Api-Key": GOOGLE_PLACES_KEY,
                  "X-Goog-FieldMask":
                    "places.displayName,places.formattedAddress,places.nationalPhoneNumber,places.websiteUri,places.rating",
                },
                body: JSON.stringify({ textQuery: queryText }),
              });

              if (!placesResp.ok) continue;
              const placesData = await placesResp.json();
              const places = placesData.places || [];

              for (const p of places) {
                if (newlyExtracted.length >= targetCount) break;
                const bizName = p.displayName?.text?.trim();
                const website = p.websiteUri || "";
                const phone = p.nationalPhoneNumber || "";

                if (!bizName || !website) continue;

                const foundEmails = await scrapeEmailsFromWebsite(website);
                const freshEmails = foundEmails.filter((e) => !existingEmails.has(e.toLowerCase()));

                if (freshEmails.length > 0) {
                  const primaryEmail = freshEmails[0];
                  existingEmails.add(primaryEmail.toLowerCase());

                  const leadRecord = {
                    business_name: bizName,
                    contact_name: "Operations Lead",
                    email: primaryEmail,
                    phone: phone,
                    niche: nicheKey,
                    city: city,
                    demo_url: nicheInfo.demo_url,
                    status: "pending",
                    agency: "alvoratech",
                    source: "Google Places USA Extraction",
                    createdAt: new Date(),
                  };

                  newlyExtracted.push(leadRecord);

                  await leadsCol.updateOne(
                    { email: primaryEmail.toLowerCase() },
                    { $set: leadRecord },
                    { upsert: true }
                  );

                  try {
                    if (fs.existsSync(CSV_PATH)) {
                      const csvRow = `"${bizName.replace(/"/g, '""')}","Operations Lead","${primaryEmail}","${nicheKey}","${city}","${nicheInfo.demo_url}","pending","",""\n`;
                      fs.appendFileSync(CSV_PATH, csvRow, "utf-8");
                    }
                  } catch (csvErr) {
                    console.warn("Notice appending to CSV:", csvErr.message);
                  }
                }
              }
            } catch (err) {
              console.warn("Query error for", queryText, err.message);
            }
          }
        }
      }
    }

    return res.status(200).json({
      success: true,
      added_count: newlyExtracted.length,
      leads: newlyExtracted,
      message: `Successfully extracted and verified ${newlyExtracted.length} fresh US prospects for Alvora Tech.`,
    });
  } catch (err) {
    console.error("Extraction error:", err);
    return res.status(500).json({ success: false, error: err.message });
  }
}
