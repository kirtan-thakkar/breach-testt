from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from datetime import timedelta
from app.core.config import settings
from app.core.security import create_access_token, verify_password
from app.core.database import get_database
from app.schemas.user import Token

router = APIRouter()

@router.post("/login", response_model=Token)
async def login(
    db = Depends(get_database),
    form_data: OAuth2PasswordRequestForm = Depends()
):
    user = await db["users"].find_one({"email": form_data.username})
    if not user or not verify_password(form_data.password, user["hashed_password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    return {
        "access_token": create_access_token(
            subject=str(user["_id"]), expires_delta=access_token_expires
        ),
        "token_type": "bearer",
    }
