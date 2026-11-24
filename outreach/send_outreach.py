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
from email.utils import formatdate, make_msgid
from datetime import datetime

import config

def build_email_content(lead, sender, direct_mode=False):
    """
    Constructs high-conversion outreach pitch for US local business owners.
    Zero emojis and zero hashtags used throughout.
    In direct_mode, uses direct demonstration URL without tracking redirect or hidden pixel
    to ensure maximum deliverability during new domain warm-up.
    """
    business_name = lead.get("business_name", "your business").strip()
    contact_name = lead.get("contact_name", "").strip()
    raw_niche = lead.get("niche", "services").strip()
    niche = raw_niche.replace("-", " ")
    city = lead.get("city", "your area").strip()
    
    # Ensure valid demonstration website URL
    demo_url = lead.get("demo_url", "").strip()
    if not (demo_url.startswith("http://") or demo_url.startswith("https://")):
        demo_url = f"{config.ALVORA_WEBSITE}/{raw_niche or 'painting'}"
    
    recipient_email = lead.get("email", "").strip()

    greeting = f"Hello {contact_name}," if contact_name and contact_name.lower() != "the managing director" else f"Hello {business_name} Team,"

    subject_templates = [
        f"Quick question regarding {business_name}'s website",
        f"A modern customer website ready for {business_name}",
        f"Helping local customers in {city} find {business_name} on Google Maps and Mobile"
    ]
    subject = random.choice(subject_templates)

    encoded_email = urllib.parse.quote(recipient_email)
    encoded_biz = urllib.parse.quote(business_name)
    encoded_demo = urllib.parse.quote(demo_url)

    # Tracking parameters (use canonical domain without www)
    tracking_pixel_url = f"https://alvoratechhq.com/api/track?email={encoded_email}&biz={encoded_biz}&agency=alvoratech&action=open"
    tracked_demo_url = f"https://alvoratechhq.com/api/track?email={encoded_email}&biz={encoded_biz}&agency=alvoratech&url={encoded_demo}&action=click"

    link_target = demo_url if direct_mode else tracked_demo_url

    plain_text = f"""{greeting}

I came across {business_name} while researching top {niche} companies in {city}.

When potential clients in {city} search for {niche} services on Google Maps or their smartphones, they want fast answers and instant credibility. Without a modern website featuring click-to-call, instant online quote requests, and verified reviews, high-value jobs often go to competitors ranking above you.

We have built a live demonstration platform tailored specifically for your industry:
Demo: {demo_url}

What this brings to {business_name}:
1. Direct Call & Online Booking: High-intent local leads request quotes directly on your phone or schedule online.
2. Google Business Profile & Map-Pack Synergy: Structured local schema built specifically to help you dominate your service radius.
3. Verified Trust & Credibility: Prominent licensing, insurance verification, and 5-star customer review showcases.
4. Turnkey Delivery: 100% custom-branded and launched for your business within 3 to 5 business days.

Would you be open to a brief 5-minute call or quick walkthrough this week to see how this can generate more qualified inbound leads for {business_name}?

Best regards,

{sender['name']}
Digital Growth Partner | Alvora Tech
Phone / SMS: {config.ALVORA_PHONE}
Website: {config.ALVORA_WEBSITE}
Email: {config.ALVORA_INBOUND_EMAIL}
"""

    tracking_pixel_html = "" if direct_mode else f'\n  <!-- Real-Time Open Tracking Pixel -->\n  <img src="{tracking_pixel_url}" width="1" height="1" style="display:none; width:1px; height:1px; border:0;" alt="" />'

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
      When potential clients in {city} search for {niche} services on Google Maps or their smartphones, they want fast answers and instant credibility. Without a modern website featuring click-to-call, instant online quote requests, and verified reviews, high-value jobs often go to competitors ranking above you.
    </p>

    <div class="highlight-box">
      <p style="margin: 0 0 8px 0; font-weight: 600; color: #1e40af; font-size: 14px;">
        We built a live demonstration platform specifically for your industry:
      </p>
      <a href="{link_target}" class="button" target="_blank">View Live Demonstration</a>
      <p style="margin: 8px 0 0 0; font-size: 12px; color: #64748b;">
        Or visit directly: <a href="{demo_url}" style="color: #2563eb; font-family: monospace;">{demo_url}</a>
      </p>
    </div>

    <p style="font-size: 14px; font-weight: 600; color: #0f172a; margin-bottom: 8px;">
      What this brings to {business_name}:
    </p>
    <ul class="benefits-list">
      <li><strong>Direct Call & Quote Booking:</strong> High-intent local leads request quotes directly on your phone or schedule online.</li>
      <li><strong>Google Business Profile & Map-Pack Synergy:</strong> Structured local schema built specifically to help you dominate your service radius.</li>
      <li><strong>Verified Trust & Credibility:</strong> Prominent licensing, insurance verification, and 5-star customer review showcases.</li>
      <li><strong>Turnkey Delivery:</strong> 100% custom-branded and launched for your business within 3 to 5 business days.</li>
    </ul>

    <p style="font-size: 14px; color: #334155;">
      Would you be open to a brief 5-minute call or quick walkthrough this week to see how this can generate more qualified inbound leads for {business_name}?
    </p>

    <div class="footer">
      <p style="margin: 0 0 4px 0; font-weight: 600; color: #0f172a;">{sender['name']}</p>
      <p style="margin: 0 0 4px 0;">{sender.get('role', 'Digital Growth Partner')} | Alvora Tech</p>
      <p style="margin: 0 0 4px 0;">Phone / SMS: <a href="tel:+14127963968" style="color: #2563eb; text-decoration: none;">{config.ALVORA_PHONE}</a></p>
      <p style="margin: 0 0 4px 0;">Website: <a href="{config.ALVORA_WEBSITE}" style="color: #2563eb; text-decoration: none;">{config.ALVORA_WEBSITE}</a></p>
      <p style="margin: 12px 0 0 0; font-size: 11px; color: #94a3b8;">
        If you prefer not to receive website optimization updates, reply with "Unsubscribe" and we will remove your address immediately.
      </p>
    </div>
  </div>{tracking_pixel_html}
</body>
</html>
"""
    return subject, plain_text, html_content

def send_via_smtp(sender, to_email, subject, plain_text, html_content):
    """
    Connects to Zoho SSL SMTP server and dispatches email with RFC-compliant headers.
    """
    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = f"{sender['name']} <{sender['email']}>"
    msg["To"] = to_email
    msg["Reply-To"] = "Lucas | Alvora Tech <lucas@alvoratechhq.com>"
    msg["Date"] = formatdate(localtime=True)
    msg["Message-ID"] = make_msgid(domain="alvoratechhq.com")

    msg.attach(MIMEText(plain_text, "plain", "utf-8"))
    msg.attach(MIMEText(html_content, "html", "utf-8"))

    context = ssl.create_default_context()
    with smtplib.SMTP_SSL(config.SMTP_HOST, config.SMTP_PORT, context=context, timeout=30) as server:
        server.login(sender["email"], sender["password"])
        server.sendmail(sender["email"], [to_email], msg.as_string())

def run_outreach(dry_run=False, test_recipient=None, direct_mode=False):
    """
    Executes outreach rotation across 3 Zoho sender mailboxes (Lucas, James, Oliver).
    """
    print("=" * 70)
    print("ALVORA TECH OUTREACH ENGINE (USA) - " + ("DRY RUN MODE" if dry_run else "LIVE DISPATCH MODE"))
    print(f"Timestamp: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    if direct_mode:
        print("Deliverability Mode: DIRECT LINKS ENABLED (warm-up / anti-spam optimization)")
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
        print(f"Running multi-sender test dispatch to: {test_recipient}")
        test_leads = pending_leads[:3] if len(pending_leads) >= 3 else leads[:3]
        for idx, sender in enumerate(config.SENDERS):
            sample_lead = test_leads[idx % len(test_leads)] if test_leads else {
                "business_name": "Apex Painting Contractors",
                "contact_name": "Mr. David Miller",
                "email": test_recipient,
                "niche": "painting",
                "city": "Houston TX",
                "demo_url": "https://alvoratechhq.com/painting"
            }
            lead_for_send = dict(sample_lead)
            lead_for_send["email"] = test_recipient
            subject, plain, html = build_email_content(lead_for_send, sender, direct_mode=direct_mode)
            print(f"\n[{idx+1}/{len(config.SENDERS)}] Testing sender: {sender['email']} ({sender['name']})")
            print(f"Subject: {subject}")
            print(f"Live Demo URL in email: {lead_for_send.get('demo_url')}")
            try:
                send_via_smtp(sender, test_recipient, subject, plain, html)
                print(f"SUCCESS: Test email successfully dispatched via {sender['email']}")
            except Exception as e:
                print(f"ERROR: Dispatch failed via {sender['email']}: {e}")
            if idx < len(config.SENDERS) - 1:
                time.sleep(3)
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

        subject, plain, html = build_email_content(lead, sender, direct_mode=direct_mode)

        if dry_run:
            print(f"\n[DRY RUN {sent_this_session + 1}] SENDER: {sender['email']} -> {to_email}")
            print(f"Subject: {subject}")
            print(f"Business: {lead.get('business_name')} | Location: {lead.get('city')} | Demo: {lead.get('demo_url')}")
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

            with open(config.LEADS_CSV_PATH, "w", encoding="utf-8", newline="") as f:
                writer = csv.DictWriter(f, fieldnames=leads[0].keys())
                writer.writeheader()
                writer.writerows(leads)

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

def generate_followup_email(lead, sender, direct_mode=False):
    biz_name = (lead.get("business_name") or "Your Business").strip()
    contact = (lead.get("contact_name") or "Operations Lead").strip()
    city = (lead.get("city") or "your area").strip()
    niche = (lead.get("niche") or "services").strip()
    demo_url = (lead.get("demo_url") or "https://alvoratechhq.com/painting").strip()
    to_email = lead.get("email", "").strip()

    subject = f"Re: Quick question regarding {biz_name}'s website"

    plain = f"""Hi {contact},

Following up on my message last week regarding {biz_name}'s web presence in {city}.

I know you are busy managing active projects, so I wanted to quickly reshare the live interactive demonstration we prepared for your sector:
Demo: {demo_url}

When customers in {city} search for {niche} contractors on mobile, having an instant mobile call/booking link and verified trust badges allows you to secure the booking immediately instead of losing them to competitors.

Would you be open to a brief 5-minute introductory call this week?

Best regards,

{sender['name']}
{sender['role']} | Alvora Tech
Direct: +1 (214) 817-2938
Website: https://alvoratechhq.com
"""

    html = f"""<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; padding: 20px;">
  <p>Hi {contact},</p>
  <p>Following up on my message last week regarding <strong>{biz_name}</strong>'s mobile web presence in {city}.</p>
  <p>I know you are busy managing active projects, so I wanted to quickly reshare the live interactive demonstration we prepared for your sector:</p>
  <p style="margin: 22px 0;">
    <a href="{demo_url}" style="display: inline-block; background-color: #0f172a; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600;">View Live Demonstration &rarr;</a>
  </p>
  <p>When high-value clients in {city} search for {niche} providers on mobile, having an instant booking workflow guarantees you convert the inquiry before competitors.</p>
  <p>Would you be open to a brief 5-minute introductory call this week?</p>
  <p>Best regards,<br><br><strong>{sender['name']}</strong><br>{sender['role']} | Alvora Tech<br>Direct: +1 (214) 817-2938</p>
</body>
</html>"""

    return subject, plain, html


def run_followup(direct_mode=False):
    leads = load_leads()
    now = datetime.now()
    due_indices = []

    for i, l in enumerate(leads):
        status = l.get("status", "").lower()
        sent_at = l.get("sent_at", "").strip()
        if status in ("sent", "delivered") and sent_at:
            try:
                sent_dt = datetime.strptime(sent_at, "%Y-%m-%d %H:%M:%S")
                if (now - sent_dt).days >= 7:
                    due_indices.append(i)
            except Exception:
                pass

    if not due_indices:
        print("No US leads currently due for 7-day follow-up.")
        return

    print("=" * 70)
    print("ALVORA TECH OUTREACH ENGINE - 7-DAY FOLLOW-UP DISPATCH (USA)")
    print(f"Total Follow-Ups Due (>= 7 days since initial pitch): {len(due_indices)}")
    print("=" * 70)

    sender_map = {s["email"].lower(): s for s in config.SENDERS}
    total_followups_sent = 0

    for idx in due_indices:
        lead = leads[idx]
        recipient = lead["email"].strip()
        original_sender_email = lead.get("sent_by", "").lower().strip()
        sender = sender_map.get(original_sender_email) or config.SENDERS[0]

        subject, plain, html = generate_followup_email(lead, sender, direct_mode=direct_mode)

        print(f"[{total_followups_sent + 1}/{len(due_indices)}] Sending 7-day follow-up via {sender['first_name']} to {recipient} ({lead['business_name']})...")

        try:
            send_via_smtp(sender, recipient, subject, plain, html)
            now_iso = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            leads[idx]["status"] = "followup_sent"
            leads[idx]["sent_at"] = now_iso
            with open(config.LEADS_CSV_PATH, "w", encoding="utf-8", newline="") as f:
                writer = csv.DictWriter(f, fieldnames=leads[0].keys())
                writer.writeheader()
                writer.writerows(leads)
            total_followups_sent += 1
            print(f"  ✓ Follow-up delivered.")

            if total_followups_sent < len(due_indices):
                pause = random.randint(60, 120)
                print(f"  Sleeping {pause} seconds...")
                time.sleep(pause)

        except Exception as e:
            print(f"  ✗ Error sending follow-up to {recipient}: {e}")

    print("\n" + "=" * 70)
    print(f"Follow-up batch completed. Total follow-ups sent: {total_followups_sent}")
    print("=" * 70)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Alvora Tech USA Cold Outreach Pitching Engine")
    parser.add_argument("--send", action="store_true", help="Execute live email sending")
    parser.add_argument("--followup", action="store_true", help="Execute 7-day follow-up emails")
    parser.add_argument("--dry-run", action="store_true", help="Simulate email generation without sending")
    parser.add_argument("--test", type=str, help="Send a single test email to the specified address")
    parser.add_argument("--direct", action="store_true", help="Use direct links without tracking redirect for warm-up deliverability")
    args = parser.parse_args()

    if args.test:
        run_outreach(test_recipient=args.test, direct_mode=args.direct)
    elif args.send:
        run_outreach(dry_run=False, direct_mode=args.direct)
    elif args.followup:
        run_followup(direct_mode=args.direct)
    elif args.dry_run:
        run_outreach(dry_run=True, direct_mode=args.direct)
    else:
        print("Please provide an argument: --dry-run, --send, --followup, or --test <email> (optionally add --direct)")
