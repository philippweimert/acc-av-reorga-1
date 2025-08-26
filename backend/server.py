from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.responses import FileResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os
import logging
from pathlib import Path
from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Create the main app
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Define Models
class ContactForm(BaseModel):
    name: str
    email: EmailStr
    company: Optional[str] = None
    phone: Optional[str] = None
    message: str

# Email processing logic
async def process_contact_form(contact_data: ContactForm):
    """Processes contact form data"""
    try:
        # Email body
        body = f"""
Neue Kontaktanfrage über die Website:

Name: {contact_data.name}
E-Mail: {contact_data.email}
Unternehmen: {contact_data.company or 'Nicht angegeben'}
Telefon: {contact_data.phone or 'Nicht angegeben'}

Nachricht:
{contact_data.message}

---
Gesendet am: {datetime.now().strftime('%d.%m.%Y um %H:%M:%S')}
"""
        # Since there's no DB and no SMTP configured, we just log it.
        logger.info("New contact form submission:")
        logger.info(body)
        
        return {"status": "success", "message": "Nachricht erfolgreich verarbeitet"}
        
    except Exception as e:
        logger.error(f"Failed to process contact form: {str(e)}")
        raise HTTPException(status_code=500, detail="Fehler bei der Verarbeitung der Nachricht")

# API routes
@api_router.get("/")
async def root():
    return {"message": "Hello from Acencia API"}

@api_router.post("/contact")
async def submit_contact_form(contact_data: ContactForm):
    """Handle contact form submission"""
    try:
        result = await process_contact_form(contact_data)
        return result
    except HTTPException as e:
        raise e
    except Exception as e:
        logger.error(f"Unexpected error in contact form: {str(e)}")
        raise HTTPException(status_code=500, detail="Ein unerwarteter Fehler ist aufgetreten")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# This will serve the static assets (e.g., CSS, JS) from the build directory
static_files_dir = ROOT_DIR.parent / "frontend" / "build"
app.mount("/static", StaticFiles(directory=static_files_dir / "static"), name="static")

# This is the catch-all route that serves the React app's index.html file
# for any non-API, non-static file request.
# It must be placed after all other API routes and static file mounts.
@app.get("/{full_path:path}")
async def serve_react_app(full_path: str):
    return FileResponse(static_files_dir / "index.html")
