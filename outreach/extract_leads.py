import os
import sys
import csv
import re
import json
import time
import urllib.request
import urllib.parse
from datetime import datetime

import config

GOOGLE_PLACES_KEY = os.environ.get("GOOGLE_PLACES_API_KEY", "AIzaSyB0pWJjUV6yBFuefNKZtFsh86v6yIEspLo")

NICHES = {
    "cleaning": {
        "keywords": ["commercial cleaning services", "office janitorial company", "cleaning service contractors"],
        "demo_url": "https://alvoratechhq.com/cleaning"
    },
    "painting": {
        "keywords": ["painting contractors", "residential house painters", "commercial painting company"],
        "demo_url": "https://alvoratechhq.com/painting"
    },
    "plumbing-services": {
        "keywords": ["commercial plumbing contractor", "emergency plumbing repair", "plumbing and drain specialists"],
        "demo_url": "https://alvoratechhq.com/plumbing-services"
    },
    "auto-repair": {
        "keywords": ["auto repair shop", "collision repair center", "transmission and brake repair"],
        "demo_url": "https://alvoratechhq.com/auto-repair"
    },
    "contractor": {
        "keywords": ["general contractor", "home remodeling company", "commercial building construction"],
        "demo_url": "https://alvoratechhq.com/contractor"
    },
    "dental-care": {
        "keywords": ["family dental clinic", "cosmetic dentist practice", "dental care center"],
        "demo_url": "https://alvoratechhq.com/dental-care"
    },
    "personal-injury": {
        "keywords": ["personal injury law firm", "accident and injury attorneys", "injury lawyer practice"],
        "demo_url": "https://alvoratechhq.com/personal-injury"
    },
    "towing-company": {
        "keywords": ["towing and recovery service", "emergency roadside assistance", "flatbed towing company"],
        "demo_url": "https://alvoratechhq.com/towing-company"
    },
    "tree-removal": {
        "keywords": ["tree removal service", "certified arborist tree care", "tree trimming and pruning company"],
        "demo_url": "https://alvoratechhq.com/tree-removal"
    },
    "electrical": {
        "keywords": ["licensed electrical contractors", "commercial electrician services", "residential electrical repair"],
        "demo_url": "https://alvoratechhq.com/electrical"
    },
    "flooring": {
        "keywords": ["flooring installation contractors", "epoxy flooring specialists", "hardwood and tile flooring"],
        "demo_url": "https://alvoratechhq.com/flooring"
    },
    "landscaping": {
        "keywords": ["landscape design and maintenance", "commercial landscaping contractors", "hardscaping and lawn care"],
        "demo_url": "https://alvoratechhq.com/landscaping"
    },
    "locksmith": {
        "keywords": ["commercial locksmith services", "mobile emergency locksmith", "lock and key specialists"],
        "demo_url": "https://alvoratechhq.com/locksmith"
    },
    "pest-control": {
        "keywords": ["pest control exterminators", "termite inspection and treatment", "commercial pest management"],
        "demo_url": "https://alvoratechhq.com/pest-control"
    },
    "pressure-demo": {
        "keywords": ["pressure washing company", "commercial power washing", "exterior building and roof wash"],
        "demo_url": "https://alvoratechhq.com/pressure-demo"
    }
}

LOCATIONS = [
    {"state": "TX", "city": "Houston", "districts": ["Downtown", "Heights", "Katy", "Sugar Land"]},
    {"state": "TX", "city": "Dallas", "districts": ["North Dallas", "Plano", "Frisco", "Fort Worth"]},
    {"state": "TX", "city": "Austin", "districts": ["Downtown", "Round Rock", "Cedar Park"]},
    {"state": "FL", "city": "Miami", "districts": ["Brickell", "Coral Gables", "Doral", "Kendall"]},
    {"state": "FL", "city": "Orlando", "districts": ["Downtown", "Winter Park", "Kissimmee"]},
    {"state": "FL", "city": "Tampa", "districts": ["Downtown", "St. Petersburg", "Clearwater"]},
    {"state": "CA", "city": "Los Angeles", "districts": ["Pasadena", "Glendale", "Long Beach", "Torrance"]},
    {"state": "CA", "city": "San Diego", "districts": ["Downtown", "La Jolla", "Chula Vista"]},
    {"state": "GA", "city": "Atlanta", "districts": ["Buckhead", "Alpharetta", "Marietta", "Decatur"]},
    {"state": "AZ", "city": "Phoenix", "districts": ["Scottsdale", "Mesa", "Chandler", "Tempe"]},
    {"state": "CO", "city": "Denver", "districts": ["Downtown", "Aurora", "Lakewood", "Boulder"]},
    {"state": "NC", "city": "Charlotte", "districts": ["Uptown", "South End", "Ballantyne", "Matthews"]},
    {"state": "WA", "city": "Seattle", "districts": ["Bellevue", "Kirkland", "Renton", "Redmond"]},
    {"state": "IL", "city": "Chicago", "districts": ["Naperville", "Schaumburg", "Evanston"]}
]

def clean_email(email_str):
    if not email_str:
        return None
    email_str = email_str.strip().rstrip(".,;:)'\"")
    low = email_str.lower()
    bad_exts = [".png", ".jpg", ".jpeg", ".webp", ".svg", ".gif", ".css", ".js"]
    if any(low.endswith(ext) for ext in bad_exts):
        return None
    bad_terms = ["wixpress", "sentry", "example", "schema", "wordpress", "yourdomain", "domain.com"]
    if any(term in low for term in bad_terms):
        return None
    if "@" not in email_str or "." not in email_str.split("@")[1]:
        return None
    return email_str

def scrape_email_from_website(website_url):
    if not website_url:
        return []
    emails = set()
    test_urls = [website_url]
    try:
        parsed = urllib.parse.urlparse(website_url)
        base = f"{parsed.scheme}://{parsed.netloc}"
        test_urls.extend([f"{base}/contact", f"{base}/contact-us", f"{base}/about"])
    except:
        pass

    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AlvoraScraper/1.0"}
    for u in test_urls:
        try:
            req = urllib.request.Request(u, headers=headers)
            with urllib.request.urlopen(req, timeout=4) as resp:
                if resp.status != 200:
                    continue
                html = resp.read().decode("utf-8", errors="ignore")

                # mailto: matches
                mailtos = re.findall(r'mailto:([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)', html, re.I)
                for m in mailtos:
                    clean = clean_email(m)
                    if clean:
                        emails.add(clean)

                # regex matches
                matches = re.findall(r'[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+', html)
                for m in matches:
                    clean = clean_email(m)
                    if clean:
                        emails.add(clean)

                if emails:
                    break
        except:
            continue

    return list(emails)

def extract_leads(target_count=25, target_niche=None):
    print("=" * 70)
    print("ALVORA TECH USA AUTOMATED LEAD EXTRACTION (GOOGLE PLACES API NEW)")
    print(f"Target count: {target_count} verified US business prospects")
    print("=" * 70)

    existing_emails = set()
    if os.path.exists(config.LEADS_CSV_PATH):
        with open(config.LEADS_CSV_PATH, "r", encoding="utf-8") as f:
            reader = csv.DictReader(f)
            for r in reader:
                e = r.get("email", "").strip().lower()
                if e:
                    existing_emails.add(e)

    newly_added = []
    niche_keys = [target_niche] if target_niche and target_niche in NICHES else list(NICHES.keys())

    for niche_key in niche_keys:
        if len(newly_added) >= target_count:
            break
        niche_info = NICHES[niche_key]

        for loc in LOCATIONS:
            if len(newly_added) >= target_count:
                break
            city = f"{loc['city']}, {loc['state']}"

            for district in loc["districts"]:
                if len(newly_added) >= target_count:
                    break

                for keyword in niche_info["keywords"][:2]:
                    if len(newly_added) >= target_count:
                        break

                    query = f"{keyword} in {district} {loc['city']} {loc['state']} USA"
                    print(f"Querying Places API: {query}...")

                    try:
                        places_url = "https://places.googleapis.com/v1/places:searchText"
                        post_data = json.dumps({"textQuery": query}).encode("utf-8")
                        req = urllib.request.Request(
                            places_url,
                            data=post_data,
                            headers={
                                "Content-Type": "application/json",
                                "X-Goog-Api-Key": GOOGLE_PLACES_KEY,
                                "X-Goog-FieldMask": "places.displayName,places.formattedAddress,places.nationalPhoneNumber,places.websiteUri,places.rating"
                            }
                        )

                        with urllib.request.urlopen(req, timeout=10) as resp:
                            if resp.status != 200:
                                continue
                            data = json.loads(resp.read().decode("utf-8"))
                            places = data.get("places", [])

                            for p in places:
                                if len(newly_added) >= target_count:
                                    break
                                biz_name = p.get("displayName", {}).get("text", "").strip()
                                website = p.get("websiteUri", "").strip()
                                phone = p.get("nationalPhoneNumber", "").strip()

                                if not biz_name or not website:
                                    continue

                                emails = scrape_email_from_website(website)
                                fresh_emails = [e for e in emails if e.lower() not in existing_emails]

                                if fresh_emails:
                                    primary_email = fresh_emails[0]
                                    existing_emails.add(primary_email.lower())

                                    record = {
                                        "business_name": biz_name,
                                        "contact_name": "Operations Lead",
                                        "email": primary_email,
                                        "niche": niche_key,
                                        "city": city,
                                        "demo_url": niche_info["demo_url"],
                                        "status": "pending",
                                        "sent_at": "",
                                        "sent_by": ""
                                    }
                                    newly_added.append(record)
                                    print(f"  + Added: {biz_name} ({primary_email}) in {city} -> {niche_info['demo_url']}")

                                    # Append directly to CSV
                                    file_exists = os.path.exists(config.LEADS_CSV_PATH)
                                    with open(config.LEADS_CSV_PATH, "a", encoding="utf-8", newline="") as f:
                                        writer = csv.DictWriter(f, fieldnames=list(record.keys()))
                                        if not file_exists:
                                            writer.writeheader()
                                        writer.writerow(record)
                    except Exception as err:
                        print(f"Error querying {query}: {err}")
                    time.sleep(1)

    print(f"\nExtraction completed. Added {len(newly_added)} fresh verified US prospects to {config.LEADS_CSV_PATH}.")

if __name__ == "__main__":
    count = int(sys.argv[1]) if len(sys.argv) > 1 and sys.argv[1].isdigit() else 25
    niche = sys.argv[2] if len(sys.argv) > 2 else None
    extract_leads(target_count=count, target_niche=niche)
