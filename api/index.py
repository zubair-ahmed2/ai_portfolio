import os
import sys

# Ensure the backend package is importable when running on Vercel
current_dir = os.path.dirname(__file__)
backend_dir = os.path.join(current_dir, "..", "backend")
sys.path.append(os.path.abspath(backend_dir))

# Import the FastAPI app instance
from main import app as app

# Vercel's Python runtime will detect the ASGI app via the `app` variable


