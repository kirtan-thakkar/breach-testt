# FastAPI MongoDB Backend Template

This is a premium, Production-ready FastAPI template with MongoDB (Motor) integration.

## Features
- **FastAPI**: Modern, fast (high-performance) web framework.
- **MongoDB**: Async connection using Motor.
- **Pydantic**: Data validation and settings management.
- **Project Structure**: Clean and scalable architecture.
- **CORS Support**: Configured for frontend integration.
- **CRUD Operations**: Pre-built examples for Items.

## Getting Started

### 1. Requirements
- Python 3.9+
- MongoDB instance (local or Atlas)

### 2. Setup
1. Move into the backend directory:
   ```bash
   cd backend
   ```
2. Create a virtual environment:
   ```bash
   uv venv
   .\.venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   uv pip install -r requirements.txt
   ```
4. Configure environment variables:
   - Rename `.env.example` to `.env`
   - Update `MONGODB_URL` with your connection string.

### 3. Run the Application
From the `backend` directory:
```bash
uvicorn app.main:app --reload
```

The API will be available at `http://localhost:8000`.
Documentation (Swagger UI) is available at `http://localhost:8000/docs`.

## Project Structure
```text
app/
├── api/             # API Router and Endpoints
│   └── v1/
│       ├── endpoints/
│       └── api.py
├── core/            # Configuration and Database logic
├── models/          # Database models (Optional for ODM)
├── schemas/         # Pydantic models for request/response
└── main.py          # App entry point
```
