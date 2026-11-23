# Veltrix Hub Automated Outreach Engine (75 Daily Emails)

A zero-budget, high-deliverability cold email system specifically engineered for **Veltrix Hub** (`veltrixhub.ng`).

---

## 1. System Overview

- **Daily Volume**: 75 emails total across 3 authenticated mailboxes (25 per account).
- **Accounts**:
  1. `kayode@veltrixhub.ng` (Kayode | Veltrix Hub)
  2. `christopher@veltrixhub.ng` (Christopher | Veltrix Hub)
  3. `william@veltrixhub.ng` (William | Veltrix Hub)
- **Rhythm & Timing**: Randomized 120 to 300 second delays (2 to 5 minutes) between consecutive sends to simulate authentic human activity and keep domain reputation high.
- **Delivery**: Direct Zoho Mail SMTP (`smtp.zoho.com:465` SSL).
- **Templates**: Mobile-first Nigerian local business pitching with direct links to live Veltrix Hub demos (e.g. `https://veltrixhub.ng/painting`).

---

## 2. Configuration (`config.py`)

Set your Zoho Mail passwords via environment variables or in a `.env` file:

```bash
# In PowerShell:
$env:ZOHO_PASS_KAYODE = "your_zoho_app_password"
$env:ZOHO_PASS_CHRISTOPHER = "your_zoho_app_password"
$env:ZOHO_PASS_WILLIAM = "your_zoho_app_password"
```

*(Tip: If Two-Factor Authentication is enabled on Zoho, generate an **App Specific Password** under Zoho Accounts > Security > App Passwords).*

---

## 3. How to Run

Open your terminal in `c:\Users\HP\Desktop\Alvoratech\outreach`:

### A. Dry Run (Preview Mode - Zero Emails Sent)
Preview the personalized email copy and rotation without connecting to SMTP:
```bash
python send_outreach.py --dry-run
```

### B. Send Test Emails
Send 1 test message from each of the 3 accounts to verify SMTP authentication and check headers:
```bash
python send_outreach.py --test scmultibiz1@gmail.com
```

### C. Run Live Outreach Batch
Send the daily batch of up to 75 emails to pending leads in `leads_veltrixhub.csv`:
```bash
python send_outreach.py --send
```

### D. View Stats
Check total leads, sent count, and pending leads:
```bash
python send_outreach.py --stats
```

---

## 4. Managing Leads (`leads_veltrixhub.csv`)

Add your new prospects to `leads_veltrixhub.csv` using these columns:
- `business_name`: The company name (e.g. `Apex Painting Services`)
- `contact_name`: The owner or manager (e.g. `Mr. Adebayo`)
- `email`: Prospect email address
- `niche`: Industry keyword (e.g. `painting`, `cleaning`, `fashion`, `auto-repair`)
- `city`: Location (e.g. `Lagos`, `Abuja`, `Port Harcourt`, `Ibadan`)
- `demo_url`: Exact Veltrix Hub demo URL (e.g. `https://veltrixhub.ng/painting`)
- `status`: Set to `pending` for new leads
- `sent_at`: (Leave blank, populated automatically)
- `sent_by`: (Leave blank, populated automatically)
