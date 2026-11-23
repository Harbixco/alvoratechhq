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
        "keywords": ["cleaning company", "cleaning services", "janitorial services", "fumigation and cleaning"],
        "demo_url": "https://alvoratechhq.com/cleaning"
    },
    "painting": {
        "keywords": ["painting company", "house painters", "painting contractor", "commercial painters"],
        "demo_url": "https://alvoratechhq.com/painting"
    },
    "plumbing-services": {
        "keywords": ["plumbing services", "emergency plumber", "plumbing contractor", "borehole installation"],
        "demo_url": "https://alvoratechhq.com/plumbing-services"
    },
    "auto-repair": {
        "keywords": ["auto repair workshop", "car mechanic", "auto diagnosis lagos", "car servicing workshop"],
        "demo_url": "https://alvoratechhq.com/auto-repair"
    },
    "contractor": {
        "keywords": ["building contractor", "construction company", "renovation contractor", "civil engineering"],
        "demo_url": "https://alvoratechhq.com/contractor"
    },
    "dental-care": {
        "keywords": ["dental clinic", "dentist practice", "dental hospital", "orthodontic clinic"],
        "demo_url": "https://alvoratechhq.com/dental-care"
    },
    "personal-injury": {
        "keywords": ["law firm", "legal practitioners", "barristers solicitors", "commercial lawyers"],
        "demo_url": "https://alvoratechhq.com/personal-injury"
    },
    "towing-company": {
        "keywords": ["towing service", "vehicle recovery", "breakdown service lagos", "car towing company"],
        "demo_url": "https://alvoratechhq.com/towing-company"
    },
    "tree-removal": {
        "keywords": ["tree pruning service", "tree cutting company", "arborist nigeria", "tree removal service"],
        "demo_url": "https://alvoratechhq.com/tree-removal"
    },
    "electrical": {
        "keywords": ["electrical services", "electrical contractor", "solar inverter installation", "industrial electrician"],
        "demo_url": "https://alvoratechhq.com/electrical"
    },
    "flooring": {
        "keywords": ["flooring company", "epoxy flooring", "marble tiles installation", "hardwood flooring lagos"],
        "demo_url": "https://alvoratechhq.com/flooring"
    },
    "landscaping": {
        "keywords": ["landscaping services", "interlocking and paving", "garden design lagos", "horticulture nigeria"],
        "demo_url": "https://alvoratechhq.com/landscaping"
    },
    "locksmith": {
        "keywords": ["locksmith services", "car key programming", "security doors installation", "lock repair lagos"],
        "demo_url": "https://alvoratechhq.com/locksmith"
    },
    "pest-control": {
        "keywords": ["pest control services", "fumigation company", "termite treatment", "bed bug extermination"],
        "demo_url": "https://alvoratechhq.com/pest-control"
    },
    "pressure-demo": {
        "keywords": ["pressure washing", "power washing", "exterior building cleaning", "roof cleaning service"],
        "demo_url": "https://alvoratechhq.com/pressure-demo"
    }
}

LOCATIONS = [
    {"city": "Lagos", "districts": ["Lekki", "Ikeja", "Victoria Island", "Yaba", "Surulere", "Ajah", "Maryland"]},
    {"city": "Abuja", "districts": ["Wuse", "Garki", "Maitama", "Jabi", "Gwarinpa", "Asokoro"]},
    {"city": "Port Harcourt", "districts": ["GRA", "Trans Amadi", "Peter Odili"]},
    {"city": "Ibadan", "districts": ["Bodija", "Ring Road", "Oluyole"]}
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
    print("ALVORA TECH AUTOMATED LEAD EXTRACTION (GOOGLE PLACES API NEW)")
    print(f"Target count: {target_count} verified prospects")
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
            city = loc["city"]

            for district in loc["districts"]:
                if len(newly_added) >= target_count:
                    break

                for keyword in niche_info["keywords"][:2]:
                    if len(newly_added) >= target_count:
                        break

                    query = f"{keyword} in {district} {city} Nigeria"
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
                                        "contact_name": "The Managing Director",
                                        "email": primary_email,
                                        "niche": niche_key,
                                        "city": city,
                                        "demo_url": niche_info["demo_url"],
                                        "status": "pending",
                                        "sent_at": "",
                                        "sent_by": ""
                                    }
                                    newly_added.append(record)
                                    print(f"  + Added: {biz_name} ({primary_email}) -> {niche_info['demo_url']}")

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

    print(f"\nExtraction completed. Added {len(newly_added)} fresh verified prospects to {config.LEADS_CSV_PATH}.")

if __name__ == "__main__":
    count = int(sys.argv[1]) if len(sys.argv) > 1 and sys.argv[1].isdigit() else 25
    niche = sys.argv[2] if len(sys.argv) > 2 else None
    extract_leads(target_count=count, target_niche=niche)
