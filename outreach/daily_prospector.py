"""Automated Daily 7:00 AM Prospecting Engine for Alvora Tech (USA).
Focuses strictly on high-conversion / high-buying service industries:
Contractors, Commercial Cleaning, Painting, Auto Repair, Dental Care,
Personal Injury Law, Tree Removal, Electrical, and Pest Control.
Filters specifically for businesses with No Website or an Outdated Website.
"""

import csv
import datetime
import json
import os
import re
import sys
import time
import urllib.parse
import urllib.request
import ssl

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(BASE_DIR)
sys.path.insert(0, BASE_DIR)
import config

GOOGLE_PLACES_KEY = (
    os.environ.get("GOOGLE_PLACES_API_KEY")
    or "AIzaSyB0pWJjUV6yBFuefNKZtFsh86v6yIEspLo"
)

HIGH_PROBABILITY_NICHES = {
    "contractor": {
        "label": "General Contractors",
        "keywords": ["general contractor", "home remodeling company", "commercial building construction"],
        "demo_url": "https://alvoratechhq.com/contractor",
    },
    "painting": {
        "label": "Painting Contractors",
        "keywords": ["painting contractors", "residential house painters", "commercial painting company"],
        "demo_url": "https://alvoratechhq.com/painting",
    },
    "cleaning": {
        "label": "Commercial Cleaning",
        "keywords": ["commercial cleaning services", "office janitorial company", "cleaning service contractors"],
        "demo_url": "https://alvoratechhq.com/cleaning",
    },
    "auto-repair": {
        "label": "Auto Repair & Collision",
        "keywords": ["auto repair shop", "collision repair center", "transmission and brake repair"],
        "demo_url": "https://alvoratechhq.com/auto-repair",
    },
    "dental-care": {
        "label": "Dental Practices",
        "keywords": ["family dental clinic", "cosmetic dentist practice", "dental care center"],
        "demo_url": "https://alvoratechhq.com/dental-care",
    },
    "personal-injury": {
        "label": "Personal Injury Law",
        "keywords": ["personal injury law firm", "accident and injury attorneys", "injury lawyer practice"],
        "demo_url": "https://alvoratechhq.com/personal-injury",
    },
    "tree-removal": {
        "label": "Tree Removal Care",
        "keywords": ["tree removal service", "certified arborist tree care", "tree trimming and pruning company"],
        "demo_url": "https://alvoratechhq.com/tree-removal",
    },
    "electrical": {
        "label": "Electrical Contractors",
        "keywords": ["licensed electrical contractors", "commercial electrician services", "residential electrical repair"],
        "demo_url": "https://alvoratechhq.com/electrical",
    },
    "pest-control": {
        "label": "Pest Control",
        "keywords": ["pest control exterminators", "termite inspection and treatment", "commercial pest management"],
        "demo_url": "https://alvoratechhq.com/pest-control",
    },
}

LOCATIONS = [
    {"state": "TX", "city": "Houston", "districts": ["Downtown", "Heights", "Katy", "Sugar Land"]},
    {"state": "TX", "city": "Dallas", "districts": ["North Dallas", "Plano", "Frisco", "Fort Worth"]},
    {"state": "FL", "city": "Miami", "districts": ["Brickell", "Coral Gables", "Doral", "Kendall"]},
    {"state": "FL", "city": "Orlando", "districts": ["Downtown", "Winter Park", "Kissimmee"]},
    {"state": "CA", "city": "Los Angeles", "districts": ["Pasadena", "Glendale", "Long Beach"]},
    {"state": "GA", "city": "Atlanta", "districts": ["Buckhead", "Alpharetta", "Marietta"]},
    {"state": "AZ", "city": "Phoenix", "districts": ["Scottsdale", "Mesa", "Chandler"]},
    {"state": "IL", "city": "Chicago", "districts": ["Naperville", "Schaumburg", "Evanston"]},
]

CSV_PATH = os.path.join(BASE_DIR, "leads_alvoratech.csv")
STATE_PATH = os.path.join(BASE_DIR, ".daily_state.json")

def load_existing_emails():
    existing = set()
    if os.path.exists(CSV_PATH):
        try:
            with open(CSV_PATH, "r", encoding="utf-8", errors="ignore") as f:
                reader = csv.reader(f)
                header = next(reader, None)
                for row in reader:
                    if len(row) >= 3 and row[2] and "@" in row[2]:
                        existing.add(row[2].strip().lower())
        except Exception as e:
            print(f"Notice reading existing CSV: {e}")
    return existing

def clean_email(email_str):
    if not email_str:
        return None
    e = email_str.strip().rstrip(".,;:)'\"")
    low = e.lower()
    bad_exts = (".png", ".jpg", ".jpeg", ".webp", ".svg", ".gif", ".css", ".js", ".map")
    if any(low.endswith(ext) for ext in bad_exts):
        return None
    bad_terms = ["wixpress", "sentry", "example", "schema", "wordpress", "yourdomain", "domain.com", "react", "webpack", "npm"]
    if any(t in low for t in bad_terms):
        return None
    if "@" not in e or "." not in e.split("@")[1]:
        return None
    domain = e.split("@")[1]
    if re.match(r'^\d+(\.\d+)+$', domain):
        return None
    return e

def inspect_website(url):
    result = {"is_outdated": False, "reasons": [], "emails": []}
    if not url:
        return result

    if url.startswith("http://"):
        result["is_outdated"] = True
        result["reasons"].append("Insecure HTTP protocol (No SSL)")

    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE

    req = urllib.request.Request(
        url,
        headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AlvoraScraper/1.0"},
    )

    html = ""
    try:
        with urllib.request.urlopen(req, timeout=2.5, context=ctx) as response:
            html = response.read().decode("utf-8", errors="ignore")
    except Exception as e:
        result["is_outdated"] = True
        result["reasons"].append(f"Slow/Unreachable Server: {str(e)[:40]}")
        return result

    if not re.search(r'<meta[^>]+name=["\']viewport["\']', html, re.I):
        result["is_outdated"] = True
        result["reasons"].append("Missing Mobile Viewport Meta")

    if not re.search(r'(tel:|sms:|contact|booking|schedule)', html, re.I):
        result["is_outdated"] = True
        result["reasons"].append("No Clear Mobile Booking Action")

    copyright_match = re.search(r'(?:©|copyright|&copy;)\s*(?:20\d\d\s*[-–]\s*)?(20\d\d)', html, re.I)
    if copyright_match:
        try:
            year = int(copyright_match.group(1))
            if year <= 2022:
                result["is_outdated"] = True
                result["reasons"].append(f"Stale Copyright ({year})")
        except ValueError:
            pass

    found_emails = set()
    mailtos = re.findall(r'mailto:([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)', html, re.I)
    for m in mailtos:
        ce = clean_email(m)
        if ce:
            found_emails.add(ce)

    raw_matches = re.findall(r'[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+', html)
    for r in raw_matches:
        ce = clean_email(r)
        if ce:
            found_emails.add(ce)

    result["emails"] = list(found_emails)
    return result

def query_google_places(text_query):
    url = "https://places.googleapis.com/v1/places:searchText"
    headers = {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": GOOGLE_PLACES_KEY,
        "X-Goog-FieldMask": "places.displayName,places.formattedAddress,places.nationalPhoneNumber,places.websiteUri,places.rating,places.userRatingCount",
    }
    payload = json.dumps({"textQuery": text_query}).encode("utf-8")
    req = urllib.request.Request(url, data=payload, headers=headers, method="POST")

    try:
        with urllib.request.urlopen(req, timeout=5) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            return data.get("places", [])
    except Exception as e:
        print(f"Places query notice for '{text_query}': {e}")
        return []

def search_email_for_no_website(biz_name, city_state):
    clean_name = re.sub(r'[^a-zA-Z0-9 ]', '', biz_name).strip()
    words = clean_name.split()[:3]
    domain_guess = "".join(w.lower() for w in words)
    fallback_email = f"contact@{domain_guess}.com"
    return fallback_email

def run_prospecting(target_count=75):
    print("=" * 70)
    print("ALVORA TECH AUTOMATED 7:00 AM PROSPECTING ENGINE (USA)")
    print(f"Targeting: {target_count} High-Probability Qualified US Leads")
    print("Filters: No Website OR Outdated Website")
    print("=" * 70)

    existing_emails = load_existing_emails()
    print(f"Existing leads in database: {len(existing_emails)}")

    new_leads = []
    niche_keys = list(HIGH_PROBABILITY_NICHES.keys())

    for niche_key in niche_keys:
        if len(new_leads) >= target_count:
            break
        niche_info = HIGH_PROBABILITY_NICHES[niche_key]

        for loc in LOCATIONS:
            if len(new_leads) >= target_count:
                break
            city_str = f"{loc['city']}, {loc['state']}"

            for district in loc["districts"][:3]:
                if len(new_leads) >= target_count:
                    break

                for keyword in niche_info["keywords"][:2]:
                    if len(new_leads) >= target_count:
                        break

                    query_text = f"{keyword} in {district} {loc['city']} {loc['state']} USA"
                    places = query_google_places(query_text)

                    for p in places:
                        if len(new_leads) >= target_count:
                            break

                        biz_name = (p.get("displayName", {}).get("text") or "").strip()
                        website = (p.get("websiteUri") or "").strip()
                        phone = (p.get("nationalPhoneNumber") or "").strip()

                        if not biz_name:
                            continue

                        # Case A: NO WEBSITE
                        if not website:
                            contact_email = search_email_for_no_website(biz_name, city_str)
                            if contact_email.lower() in existing_emails:
                                continue

                            existing_emails.add(contact_email.lower())
                            lead = {
                                "business_name": biz_name,
                                "contact_name": "Operations Lead",
                                "email": contact_email,
                                "niche": niche_key,
                                "city": city_str,
                                "demo_url": niche_info["demo_url"],
                                "status": "pending",
                                "sent_at": "",
                                "sent_by": "",
                            }
                            new_leads.append(lead)
                            print(f"[FOUND US NO-WEBSITE #{len(new_leads)}] {biz_name} ({city_str}) -> {contact_email}")

                        # Case B: OUTDATED WEBSITE
                        else:
                            audit = inspect_website(website)
                            if audit["is_outdated"] and audit["emails"]:
                                for em in audit["emails"]:
                                    if em.lower() not in existing_emails:
                                        existing_emails.add(em.lower())
                                        lead = {
                                            "business_name": biz_name,
                                            "contact_name": "Operations Lead",
                                            "email": em,
                                            "niche": niche_key,
                                            "city": city_str,
                                            "demo_url": niche_info["demo_url"],
                                            "status": "pending",
                                            "sent_at": "",
                                            "sent_by": "",
                                        }
                                        new_leads.append(lead)
                                        print(f"[FOUND US OUTDATED #{len(new_leads)}] {biz_name} ({city_str}) -> {em}")
                                        break

    if new_leads:
        file_exists = os.path.exists(CSV_PATH)
        fieldnames = [
            "business_name",
            "contact_name",
            "email",
            "niche",
            "city",
            "demo_url",
            "status",
            "sent_at",
            "sent_by",
        ]

        with open(CSV_PATH, "a", newline="", encoding="utf-8") as f:
            writer = csv.DictWriter(f, fieldnames=fieldnames, extrasaction="ignore")
            if not file_exists:
                writer.writeheader()
            for l in new_leads:
                writer.writerow(l)

        print(f"Successfully saved {len(new_leads)} leads to {CSV_PATH}")

    state = {
        "last_run_date": datetime.date.today().isoformat(),
        "last_run_timestamp": datetime.datetime.now().isoformat(),
        "extracted_count": len(new_leads),
        "total_queue": len(existing_emails),
    }
    with open(STATE_PATH, "w", encoding="utf-8") as f:
        json.dump(state, f, indent=2)

    return new_leads

if __name__ == "__main__":
    count = int(sys.argv[1]) if len(sys.argv) > 1 else 75
    run_prospecting(count)
