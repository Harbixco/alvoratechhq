import csv
import smtplib
import ssl
import time
import random
import os
import sys
import argparse
import urllib.parse
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from datetime import datetime

import config

def build_email_content(lead, sender):
    """
    Constructs high-conversion outreach pitch for Nigerian business owners.
    Embeds individual 1x1 open tracking pixel and tracked demonstration click links.
    Zero emojis and zero hashtags used throughout.
    """
    business_name = lead.get("business_name", "your business").strip()
    contact_name = lead.get("contact_name", "").strip()
    niche = lead.get("niche", "services").strip()
    city = lead.get("city", "Nigeria").strip()
    demo_url = lead.get("demo_url", config.ALVORA_WEBSITE).strip()
    recipient_email = lead.get("email", "").strip()

    greeting = f"Hello {contact_name}," if contact_name and contact_name.lower() != "the managing director" else f"Hello {business_name} Team,"

    subject_templates = [
        f"Quick question regarding {business_name}'s website",
        f"A modern customer website ready for {business_name}",
        f"Helping customers in {city} find {business_name} on WhatsApp and Google"
    ]
    subject = random.choice(subject_templates)

    encoded_email = urllib.parse.quote(recipient_email)
    encoded_biz = urllib.parse.quote(business_name)
    encoded_demo = urllib.parse.quote(demo_url)

    # 1x1 Invisible Tracking Pixel (records email opens)
    tracking_pixel_url = f"https://www.alvoratechhq.com/api/track?email={encoded_email}&biz={encoded_biz}&agency=alvoratech&action=open"
    # Tracked Click Link (records demo visits and instantly redirects to live demo)
    tracked_demo_url = f"https://www.alvoratechhq.com/api/track?email={encoded_email}&biz={encoded_biz}&agency=alvoratech&url={encoded_demo}&action=click"

    plain_text = f"""{greeting}

I came across {business_name} while researching top {niche} businesses in {city}.

In today's market, most clients in {city} search for {niche} services on their phones before deciding who to trust. Without a fast, mobile-friendly website that connects directly to your WhatsApp, potential customers often end up booking with competitors.

We have built a live demonstration website tailored specifically for your industry:
Demo: {demo_url}

What this brings to {business_name}:
1. Direct WhatsApp Ordering: Customers click one button and chat directly with your sales team.
2. Verified Credibility: Prominent CAC registration and customer trust badges that reassure first-time buyers.
3. Fast Turnaround: Completely custom-branded and live for your business within 48 to 72 hours.

Would you be open to a brief 5-minute chat on WhatsApp or a quick call this week to see how this can drive more paying clients to {business_name}?

Best regards,

{sender['name']}
Digital Growth Partner | Alvora Tech
WhatsApp/Phone: {config.ALVORA_PHONE}
Website: {config.ALVORA_WEBSITE}
Email: {config.ALVORA_INBOUND_EMAIL}
"""

    html_content = f"""<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; background-color: #f8fafc; margin: 0; padding: 20px; }}
    .container {{ max-width: 580px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 32px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }}
    .highlight-box {{ background: #eff6ff; border-left: 4px solid #2563eb; padding: 16px; margin: 20px 0; border-radius: 4px; }}
    .button {{ display: inline-block; background: #2563eb; color: #ffffff !important; text-decoration: none; padding: 12px 24px; font-weight: 600; border-radius: 6px; margin: 12px 0; font-size: 14px; text-align: center; }}
    .benefits-list {{ padding-left: 20px; margin: 16px 0; }}
    .benefits-list li {{ margin-bottom: 8px; font-size: 14px; color: #334155; }}
    .footer {{ margin-top: 32px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; line-height: 1.5; }}
  </style>
</head>
<body>
  <div class="container">
    <p style="font-size: 15px; margin-top: 0;">{greeting}</p>
    
    <p style="font-size: 14px; color: #334155;">
      I came across <strong>{business_name}</strong> while researching top {niche} providers in {city}.
    </p>

    <p style="font-size: 14px; color: #334155;">
      In today's digital landscape, customers in {city} search for {niche} services on their smartphones before making a decision. Without a modern website linked directly to your business WhatsApp, potential clients frequently move on to competitors.
    </p>

    <div class="highlight-box">
      <p style="margin: 0 0 8px 0; font-weight: 600; color: #1e40af; font-size: 14px;">
        We built a live demonstration platform specifically for your industry:
      </p>
      <a href="{tracked_demo_url}" class="button" target="_blank">View Live Demonstration</a>
      <p style="margin: 8px 0 0 0; font-size: 12px; color: #64748b;">
        Or copy link: <span style="font-family: monospace;">{demo_url}</span>
      </p>
    </div>

    <p style="font-size: 14px; font-weight: 600; color: #0f172a; margin-bottom: 8px;">
      What this brings to {business_name}:
    </p>
    <ul class="benefits-list">
      <li><strong>Direct WhatsApp Conversion:</strong> High-intent visitors reach your sales team in one click.</li>
      <li><strong>Verified Trust:</strong> Prominent CAC and customer verification badges.</li>
      <li><strong>Fast Turnaround:</strong> Custom branded and ready for your business within 48 to 72 hours.</li>
    </ul>

    <p style="font-size: 14px; color: #334155;">
      Would you be open to a quick 5-minute WhatsApp conversation or call this week to see how this can be branded for {business_name}?
    </p>

    <div class="footer">
      <p style="margin: 0 0 4px 0; font-weight: 600; color: #0f172a;">{sender['name']}</p>
      <p style="margin: 0 0 4px 0;">{sender.get('role', 'Digital Growth Partner')} | Alvora Tech</p>
      <p style="margin: 0 0 4px 0;">Direct WhatsApp: <a href="{config.ALVORA_WHATSAPP}" style="color: #2563eb; text-decoration: none;">{config.ALVORA_PHONE}</a></p>
      <p style="margin: 0 0 4px 0;">Website: <a href="{config.ALVORA_WEBSITE}" style="color: #2563eb; text-decoration: none;">{config.ALVORA_WEBSITE}</a></p>
      <p style="margin: 12px 0 0 0; font-size: 11px; color: #94a3b8;">
        If you prefer not to receive website optimization updates, reply with "Unsubscribe" and we will remove your address immediately.
      </p>
    </div>
  </div>

  <!-- Real-Time Open Tracking Pixel -->
  <img src="{tracking_pixel_url}" width="1" height="1" style="display:none; width:1px; height:1px; border:0;" alt="" />
</body>
</html>
"""
    return subject, plain_text, html_content

def send_via_smtp(sender, to_email, subject, plain_text, html_content):
    """
    Connects to Zoho SSL SMTP server and dispatches email.
    """
    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = f"{sender['name']} <{sender['email']}>"
    msg["To"] = to_email
    msg["Reply-To"] = sender["email"]

    msg.attach(MIMEText(plain_text, "plain", "utf-8"))
    msg.attach(MIMEText(html_content, "html", "utf-8"))

    context = ssl.create_default_context()
    with smtplib.SMTP_SSL(config.SMTP_HOST, config.SMTP_PORT, context=context, timeout=30) as server:
        server.login(sender["email"], sender["password"])
        server.sendmail(sender["email"], [to_email], msg.as_string())

def run_outreach(dry_run=False, test_recipient=None):
    """
    Executes outreach rotation across 3 Zoho sender mailboxes (Lucas, James, Oliver).
    """
    print("=" * 70)
    print("ALVORA TECH OUTREACH ENGINE - " + ("DRY RUN MODE" if dry_run else "LIVE DISPATCH MODE"))
    print(f"Timestamp: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("=" * 70)

    if not os.path.exists(config.LEADS_CSV_PATH):
        print(f"ERROR: Leads CSV file not found at {config.LEADS_CSV_PATH}")
        sys.exit(1)

    leads = []
    with open(config.LEADS_CSV_PATH, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            leads.append(row)

    total_leads = len(leads)
    pending_leads = [l for l in leads if l.get("status", "").strip().lower() != "sent"]
    print(f"Total Leads: {total_leads} | Pending Leads: {len(pending_leads)}")

    if test_recipient:
        print(f"Running single-recipient test send to: {test_recipient}")
        test_lead = pending_leads[0] if pending_leads else {
            "business_name": "Alvora Tech Demo Enterprise",
            "contact_name": "Operations Lead",
            "email": test_recipient,
            "niche": "cleaning",
            "city": "Lagos",
            "demo_url": "https://alvoratechhq.com/cleaning"
        }
        sender = config.SENDERS[0]
        subject, plain, html = build_email_content(test_lead, sender)
        print(f"Testing sender: {sender['email']}")
        try:
            send_via_smtp(sender, test_recipient, subject, plain, html)
            print(f"SUCCESS: Test email successfully sent to {test_recipient} via {sender['email']}")
        except Exception as e:
            print(f"ERROR: Test send failed via {sender['email']}: {e}")
        return

    sender_counts = {s["id"]: 0 for s in config.SENDERS}
    sender_index = 0

    sent_this_session = 0

    for i, lead in enumerate(leads):
        if sent_this_session >= config.TOTAL_DAILY_LIMIT:
            print(f"Daily capacity of {config.TOTAL_DAILY_LIMIT} emails reached. Stopping.")
            break

        if lead.get("status", "").strip().lower() == "sent":
            continue

        # Find next sender with available quota
        attempts = 0
        sender = None
        while attempts < len(config.SENDERS):
            candidate = config.SENDERS[sender_index % len(config.SENDERS)]
            sender_index += 1
            if sender_counts[candidate["id"]] < candidate["daily_limit"]:
                sender = candidate
                break
            attempts += 1

        if not sender:
            print("All 3 sender mailboxes have reached their daily 25 email allocation.")
            break

        to_email = lead.get("email", "").strip()
        if not to_email or "@" not in to_email:
            continue

        subject, plain, html = build_email_content(lead, sender)

        if dry_run:
            print(f"\n[DRY RUN {sent_this_session + 1}] SENDER: {sender['email']} -> {to_email}")
            print(f"Subject: {subject}")
            print(f"Business: {lead.get('business_name')} | Demo: {lead.get('demo_url')}")
            lead["status"] = "dry-run"
            lead["sent_at"] = datetime.now().isoformat()
            lead["sent_by"] = sender["email"]
            sender_counts[sender["id"]] += 1
            sent_this_session += 1
            if sent_this_session >= 3:
                print("\n[Dry run preview of first 3 sample dispatches completed]")
                break
            continue

        # Live dispatch
        try:
            print(f"[{sent_this_session + 1}/{config.TOTAL_DAILY_LIMIT}] Sending pitch to {to_email} via {sender['email']}...")
            send_via_smtp(sender, to_email, subject, plain, html)
            lead["status"] = "sent"
            lead["sent_at"] = datetime.now().isoformat()
            lead["sent_by"] = sender["email"]
            sender_counts[sender["id"]] += 1
            sent_this_session += 1
            print(f"SUCCESS: Sent to {to_email}")

            # Persist status to CSV immediately
            with open(config.LEADS_CSV_PATH, "w", encoding="utf-8", newline="") as f:
                writer = csv.DictWriter(f, fieldnames=leads[0].keys())
                writer.writeheader()
                writer.writerows(leads)

            # Human-like delay between emails
            if sent_this_session < config.TOTAL_DAILY_LIMIT:
                delay = random.randint(config.MIN_DELAY_SECONDS, config.MAX_DELAY_SECONDS)
                print(f"Waiting {delay} seconds before next pitch...")
                time.sleep(delay)

        except Exception as e:
            print(f"ERROR sending to {to_email} via {sender['email']}: {e}")
            time.sleep(10)

    print("\n" + "=" * 70)
    print(f"Outreach batch completed. Total dispatched: {sent_this_session}")
    for s in config.SENDERS:
        print(f"  - {s['name']}: {sender_counts[s['id']]}/{s['daily_limit']} sent")
    print("=" * 70)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Alvora Tech Cold Outreach Pitching Engine")
    parser.add_argument("--send", action="store_true", help="Execute live email sending")
    parser.add_argument("--dry-run", action="store_true", help="Simulate email generation without sending")
    parser.add_argument("--test", type=str, help="Send a single test email to the specified address")
    args = parser.parse_args()

    if args.test:
        run_outreach(test_recipient=args.test)
    elif args.send:
        run_outreach(dry_run=False)
    elif args.dry_run:
        run_outreach(dry_run=True)
    else:
        print("Please provide an argument: --dry-run, --send, or --test <email>")
