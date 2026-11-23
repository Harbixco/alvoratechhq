import csv
import datetime
import os
import random
import smtplib
import sys
import time
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

import config

# ==============================================================================
# Email Copy Generator tailored for Nigerian Local Businesses
# ==============================================================================

def generate_email_content(lead, sender):
    business_name = lead.get("business_name", "Your Business").strip()
    contact_name = lead.get("contact_name", "").strip()
    city = lead.get("city", "Nigeria").strip()
    niche = lead.get("niche", "business").strip()
    demo_url = lead.get("demo_url", config.VELTRIX_WEBSITE).strip()

    greeting = f"Hello {contact_name}," if contact_name else f"Hello {business_name} Team,"

    subject_templates = [
        f"Helping customers in {city} find {business_name} on WhatsApp & Google",
        f"Quick question regarding {business_name}'s website",
        f"A modern customer website ready for {business_name}",
    ]
    subject = random.choice(subject_templates)

    # Clean plain-text version (superior deliverability, zero spam flags)
    plain_text = f"""{greeting}

I came across {business_name} while researching top {niche} businesses in {city}.

In today's market, most clients in {city} search for {niche} services on their phones before deciding who to trust. Without a fast, mobile-friendly website that connects directly to your WhatsApp, potential customers often end up booking with competitors.

We have built a live demonstration website tailored specifically for your industry:
👉 {demo_url}

What this brings to {business_name}:
1. Direct WhatsApp Ordering: Customers click one button and chat directly with your sales team.
2. Verified Credibility: Prominent CAC registration and customer trust badges that reassure first-time buyers.
3. Fast Turnaround: Completely custom-branded and live for your business within 3 to 5 business days.

Would you be open to a brief 5-minute chat on WhatsApp or a quick call this week to see how this can drive more paying clients to {business_name}?

Best regards,

{sender['name']}
Digital Growth Partner | Veltrix Hub
WhatsApp/Phone: {config.VELTRIX_PHONE}
Website: {config.VELTRIX_WEBSITE}
Email: {config.VELTRIX_INBOUND_EMAIL}
"""

    # Optional HTML version formatted cleanly with high deliverability
    html_text = f"""<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; padding: 20px;">
  <p>{greeting}</p>
  
  <p>I came across <strong>{business_name}</strong> while researching established {niche} services in {city}.</p>
  
  <p>In today's market, most clients in {city} search for {niche} services on their phones before deciding who to patronize. Without a fast, mobile-friendly website that links straight to your WhatsApp, potential customers often book with competitors.</p>
  
  <p>We built a live demonstration website tailored specifically for your industry:</p>
  
  <p style="margin: 24px 0;">
    <a href="{demo_url}" style="display: inline-block; background-color: #050f2c; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600;">View Live Demonstration &rarr;</a>
  </p>
  
  <p><strong>What this brings to {business_name}:</strong></p>
  <ul>
    <li><strong>Direct WhatsApp Conversion:</strong> Customers click one button and message your team directly.</li>
    <li><strong>Verified Credibility:</strong> Clear trust indicators and CAC registration signals that give new clients full confidence.</li>
    <li><strong>Fast Delivery:</strong> Custom-tailored and live for your business within 3 to 5 business days.</li>
  </ul>
  
  <p>Would you be open to a brief 5-minute chat on WhatsApp or a short phone call this week to see how this can bring more paying customers to {business_name}?</p>
  
  <p style="margin-top: 32px; border-top: 1px solid #e2e8f0; padding-top: 16px;">
    <strong>{sender['name']}</strong><br>
    Growth Team | Veltrix Hub<br>
    WhatsApp / Phone: <a href="{config.VELTRIX_WHATSAPP}" style="color: #2563eb;">{config.VELTRIX_PHONE}</a><br>
    Website: <a href="{config.VELTRIX_WEBSITE}" style="color: #2563eb;">{config.VELTRIX_WEBSITE}</a>
  </p>
</body>
</html>
"""

    return subject, plain_text, html_text


# ==============================================================================
# Lead Database Utilities
# ==============================================================================

def load_leads():
    leads = []
    if not os.path.exists(config.LEADS_CSV_PATH):
        print(f"Error: Leads file not found at {config.LEADS_CSV_PATH}")
        return leads

    with open(config.LEADS_CSV_PATH, mode="r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            leads.append(row)
    return leads


def save_leads(leads):
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
    with open(config.LEADS_CSV_PATH, mode="w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(leads)


# ==============================================================================
# SMTP Mailer Engine
# ==============================================================================

def send_email_smtp(sender, recipient_email, subject, plain_text, html_text):
    if not sender["password"]:
        raise ValueError(
            f"Missing SMTP password for sender {sender['email']}. Set environment variable ZOHO_PASS_{sender['id'].upper()}."
        )

    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = f"{sender['name']} <{sender['email']}>"
    msg["To"] = recipient_email
    msg["Reply-To"] = f"{sender['name']} <{sender['email']}>"

    part1 = MIMEText(plain_text, "plain", "utf-8")
    part2 = MIMEText(html_text, "html", "utf-8")
    msg.attach(part1)
    msg.attach(part2)

    with smtplib.SMTP_SSL(config.SMTP_HOST, config.SMTP_PORT, timeout=30) as server:
        server.login(sender["email"], sender["password"])
        server.sendmail(sender["email"], [recipient_email], msg.as_string())


# ==============================================================================
# Execution Modes
# ==============================================================================

def run_dry_run():
    leads = load_leads()
    pending = [l for l in leads if l.get("status", "").lower() == "pending"]

    print("=" * 70)
    print("VELTRIX HUB OUTREACH ENGINE - DRY RUN MODE")
    print(f"Total Leads in CSV: {len(leads)}")
    print(f"Pending Leads: {len(pending)}")
    print(f"Daily Rotation Senders: {len(config.SENDERS)} accounts (25 each = 75 total)")
    print("=" * 70)

    if not pending:
        print("No pending leads found to send.")
        return

    sender_index = 0
    sample_to_show = min(len(pending), 3)

    for i in range(sample_to_show):
        lead = pending[i]
        sender = config.SENDERS[sender_index % len(config.SENDERS)]
        sender_index += 1

        subject, plain, _ = generate_email_content(lead, sender)
        print(f"\n--- [SAMPLE {i+1}] SENDER: {sender['name']} <{sender['email']}> ---")
        print(f"TO: {lead['email']} ({lead['business_name']}, {lead['city']})")
        print(f"SUBJECT: {subject}")
        print("CONTENT PREVIEW:")
        for line in plain.splitlines()[:12]:
            print("  " + line)
        print("  ...")

    print("\n" + "=" * 70)
    print("Dry run completed. To send real emails, run: python send_outreach.py --send")
    print("=" * 70)


def run_test_email(test_recipient):
    print(f"Sending 1 test email from each of the 3 accounts to: {test_recipient}")
    test_lead = {
        "business_name": "Test Client Services",
        "contact_name": "Valued Prospect",
        "email": test_recipient,
        "niche": "painting",
        "city": "Lagos",
        "demo_url": "https://veltrixhub.ng/painting",
    }

    for sender in config.SENDERS:
        print(f"\nTesting sender: {sender['email']} ({sender['name']})...")
        subject, plain, html = generate_email_content(test_lead, sender)
        try:
            send_email_smtp(sender, test_recipient, f"[TEST] {subject}", plain, html)
            print(f"✓ Successfully sent test email from {sender['email']}")
        except Exception as e:
            print(f"✗ Failed to send from {sender['email']}: {e}")


def run_live_send():
    leads = load_leads()
    pending_indices = [i for i, l in enumerate(leads) if l.get("status", "").lower() == "pending"]

    if not pending_indices:
        print("No pending leads left to send in leads_veltrixhub.csv.")
        return

    print("=" * 70)
    print("VELTRIX HUB OUTREACH ENGINE - LIVE SENDING")
    print(f"Pending Leads Available: {len(pending_indices)}")
    print(f"Targeting Maximum: {config.TOTAL_DAILY_LIMIT} emails today across 3 accounts.")
    print("=" * 70)

    # Track count sent today per sender
    sender_counts = {s["id"]: 0 for s in config.SENDERS}
    total_sent = 0
    sender_idx = 0

    for idx in pending_indices:
        if total_sent >= config.TOTAL_DAILY_LIMIT:
            print(f"\nReached total daily limit of {config.TOTAL_DAILY_LIMIT} emails. Stopping.")
            break

        # Pick next sender that has not exceeded their 25 daily limit
        attempts = 0
        current_sender = None
        while attempts < len(config.SENDERS):
            candidate = config.SENDERS[sender_idx % len(config.SENDERS)]
            sender_idx += 1
            if sender_counts[candidate["id"]] < candidate["daily_limit"]:
                current_sender = candidate
                break
            attempts += 1

        if not current_sender:
            print("\nAll sender mailboxes have reached their daily limit (25 each). Stopping.")
            break

        lead = leads[idx]
        recipient = lead["email"].strip()
        subject, plain, html = generate_email_content(lead, current_sender)

        print(
            f"[{total_sent + 1}/{config.TOTAL_DAILY_LIMIT}] Sending via {current_sender['first_name']} to {recipient} ({lead['business_name']})..."
        )

        try:
            send_email_smtp(current_sender, recipient, subject, plain, html)
            now_iso = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            leads[idx]["status"] = "sent"
            leads[idx]["sent_at"] = now_iso
            leads[idx]["sent_by"] = current_sender["email"]
            save_leads(leads)

            sender_counts[current_sender["id"]] += 1
            total_sent += 1
            print(f"  ✓ Delivered. (Sender count today: {sender_counts[current_sender['id']]}/25)")

            # Natural delay between sends to protect sender reputation
            if total_sent < config.TOTAL_DAILY_LIMIT and total_sent < len(pending_indices):
                pause = random.randint(config.MIN_DELAY_SECONDS, config.MAX_DELAY_SECONDS)
                print(f"  Sleeping {pause} seconds to maintain human sending rhythm...")
                time.sleep(pause)

        except Exception as e:
            print(f"  ✗ Error sending to {recipient}: {e}")
            leads[idx]["status"] = "failed"
            save_leads(leads)

    print("\n" + "=" * 70)
    print(f"Sending batch finished. Total emails sent: {total_sent}")
    for s in config.SENDERS:
        print(f"  - {s['email']}: {sender_counts[s['id']]}/25 sent")
    print("=" * 70)


def show_stats():
    leads = load_leads()
    total = len(leads)
    sent = len([l for l in leads if l.get("status", "").lower() == "sent"])
    pending = len([l for l in leads if l.get("status", "").lower() == "pending"])
    failed = len([l for l in leads if l.get("status", "").lower() == "failed"])

    print("=" * 60)
    print("VELTRIX HUB OUTREACH DATABASE STATUS")
    print(f"Total Leads:   {total}")
    print(f"Sent:          {sent}")
    print(f"Pending:       {pending}")
    print(f"Failed:        {failed}")
    print("=" * 60)


if __name__ == "__main__":
    if len(sys.argv) < 2 or sys.argv[1] == "--dry-run":
        run_dry_run()
    elif sys.argv[1] == "--send":
        run_live_send()
    elif sys.argv[1] == "--test":
        recipient = sys.argv[2] if len(sys.argv) > 2 else "info@veltrixhub.ng"
        run_test_email(recipient)
    elif sys.argv[1] == "--stats":
        show_stats()
    else:
        print("Usage:")
        print("  python send_outreach.py --dry-run")
        print("  python send_outreach.py --send")
        print("  python send_outreach.py --test <email>")
        print("  python send_outreach.py --stats")
