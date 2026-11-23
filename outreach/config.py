import os

# ==============================================================================
# Veltrix Hub Automated Outreach Configuration
# ==============================================================================

SMTP_HOST = "smtp.zoho.com"
SMTP_PORT = 465  # SSL

# 3 Distinct Outreach Senders (25 emails/day each = 75 total daily)
SENDERS = [
    {
        "id": "kayode",
        "email": "kayode@veltrixhub.ng",
        "name": "Kayode | Veltrix Hub",
        "first_name": "Kayode",
        "daily_limit": 25,
        # Read from environment or local .env file
        "password": os.environ.get("ZOHO_PASS_KAYODE", ""),
    },
    {
        "id": "christopher",
        "email": "christopher@veltrixhub.ng",
        "name": "Christopher | Veltrix Hub",
        "first_name": "Christopher",
        "daily_limit": 25,
        "password": os.environ.get("ZOHO_PASS_CHRISTOPHER", ""),
    },
    {
        "id": "william",
        "email": "william@veltrixhub.ng",
        "name": "William | Veltrix Hub",
        "first_name": "William",
        "daily_limit": 25,
        "password": os.environ.get("ZOHO_PASS_WILLIAM", ""),
    },
]

# Total daily ceiling across all accounts
TOTAL_DAILY_LIMIT = 75

# Human-like delay between each email (in seconds)
# Randomly chosen between MIN_DELAY and MAX_DELAY (2 to 5 minutes)
MIN_DELAY_SECONDS = 120
MAX_DELAY_SECONDS = 300

# File paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
LEADS_CSV_PATH = os.path.join(BASE_DIR, "leads_veltrixhub.csv")
LOG_PATH = os.path.join(BASE_DIR, "outreach.log")

# Veltrix Hub Direct Business Contact Details
VELTRIX_PHONE = "+234 808 709 8270"
VELTRIX_WHATSAPP = "https://wa.me/2348087098270"
VELTRIX_WEBSITE = "https://veltrixhub.ng"
VELTRIX_INBOUND_EMAIL = "info@veltrixhub.ng"
