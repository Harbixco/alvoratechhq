Alvora Tech USA Cold Outreach Engine (75 Daily Emails)

A zero-budget, high-deliverability cold email system specifically engineered for Alvora Tech (alvoratechhq.com) targeting local service businesses across the United States.

=== Market Focus ===
- Primary Target: United States local service contractors, professional practices, and commercial services.
- Key Metros: Texas (Houston, Dallas, Austin), Florida (Miami, Orlando, Tampa), California (Los Angeles, San Diego), Georgia (Atlanta), Arizona (Phoenix, Scottsdale), Colorado (Denver), Washington (Seattle), North Carolina (Charlotte).
- Value Proposition: High-converting websites with direct click-to-call, automated quote requests, Google Maps map-pack synergy, and verified trust badges.

=== System Overview ===
- Daily Volume: 75 emails total across 3 authenticated mailboxes (25 per account).
- Accounts:
  1. lucas@alvoratechhq.com (Lucas | Alvora Tech)
  2. james@alvoratechhq.com (James | Alvora Tech)
  3. oliver@alvoratechhq.com (Oliver | Alvora Tech)
- Rhythm and Timing: Randomized 120 to 300 second delays (2 to 5 minutes) between consecutive sends to simulate authentic human activity and keep domain reputation high.
- Delivery: Direct Zoho Mail SSL SMTP (smtp.zoho.com:465).
- Templates: Mobile-first US local business pitching with direct links to live Alvora Tech demos (e.g. https://alvoratechhq.com/painting).

=== Configuration (config.py) ===
Set your Zoho Mail password via environment variables or in outreach/.env:
ZOHO_PASSWORD=Face123@@book@@

=== How to Run ===
Terminal commands in c:\Users\HP\Desktop\Alvoratech\outreach:

1. Dry Run (Preview Mode - Zero Emails Sent):
   python send_outreach.py --dry-run

2. Send Test Email:
   python send_outreach.py --test hagios1958@gmail.com

3. Run Live Outreach Batch:
   python send_outreach.py --send

4. Automated US Lead Extraction:
   python extract_leads.py 25 plumbing-services

5. One-Click Web Dashboard:
   Open http://localhost:5173/outreach or https://alvoratechhq.com/outreach
