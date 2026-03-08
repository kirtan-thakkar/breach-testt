from fastapi import APIRouter
from app.api.v1.endpoints import items, auth, users

api_router = APIRouter()

@api_router.get("/health", tags=["health"])
async def health_check():
    return {"status": "healthy"}

api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(items.router, prefix="/items", tags=["items"])
