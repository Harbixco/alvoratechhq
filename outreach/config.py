import os

# ==============================================================================
# Alvora Tech Automated Outreach Configuration
# ==============================================================================

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(BASE_DIR)

# Automatic .env loader (no external dependencies required)
def load_env():
    for env_file in [os.path.join(BASE_DIR, ".env"), os.path.join(PROJECT_ROOT, ".env"), os.path.join(PROJECT_ROOT, ".env.local")]:
        if os.path.exists(env_file):
            with open(env_file, "r", encoding="utf-8") as f:
                for line in f:
                    line = line.strip()
                    if line and not line.startswith("#") and "=" in line:
                        key, val = line.split("=", 1)
                        key = key.strip()
                        val = val.strip().strip('"').strip("'")
                        if key and not os.environ.get(key):
                            os.environ[key] = val

load_env()

SMTP_HOST = "smtp.zoho.com"
SMTP_PORT = 465  # SSL

# Shared master password for alvoratechhq.com accounts
DEFAULT_PASS = os.environ.get("ZOHO_PASSWORD") or "Face123@@book@@"

# 3 Distinct Outreach Senders (25 emails/day each = 75 total daily)
SENDERS = [
    {
        "id": "lucas",
        "email": "lucas@alvoratechhq.com",
        "name": "Lucas | Alvora Tech",
        "first_name": "Lucas",
        "role": "Senior Sales Partner",
        "daily_limit": 25,
        "password": os.environ.get("ZOHO_PASS_LUCAS") or DEFAULT_PASS,
    },
    {
        "id": "james",
        "email": "james@alvoratechhq.com",
        "name": "James | Alvora Tech",
        "first_name": "James",
        "role": "Client Outreach Strategist",
        "daily_limit": 25,
        "password": os.environ.get("ZOHO_PASS_JAMES") or DEFAULT_PASS,
    },
    {
        "id": "oliver",
        "email": "oliver@alvoratechhq.com",
        "name": "Oliver | Alvora Tech",
        "first_name": "Oliver",
        "role": "Agency Director",
        "daily_limit": 25,
        "password": os.environ.get("ZOHO_PASS_OLIVER") or DEFAULT_PASS,
    },
]

# Total daily ceiling across all accounts
TOTAL_DAILY_LIMIT = 75

# Human-like delay between each email (in seconds)
MIN_DELAY_SECONDS = 120
MAX_DELAY_SECONDS = 300

# File paths
LEADS_CSV_PATH = os.path.join(BASE_DIR, "leads_alvoratech.csv")
LOG_PATH = os.path.join(BASE_DIR, "outreach.log")

# Alvora Tech Direct Business Contact Details
ALVORA_PHONE = "+234 808 709 8270"
ALVORA_WHATSAPP = "https://wa.me/2348087098270"
ALVORA_WEBSITE = "https://alvoratechhq.com"
ALVORA_INBOUND_EMAIL = "info@alvoratechhq.com"
