from fastapi import APIRouter, Depends, HTTPException, status
from app.schemas.user import User, UserCreate
from app.core.security import get_password_hash
from app.core.database import get_database
from app.api.deps import get_current_user

router = APIRouter()

@router.post("/register", response_model=User)
async def create_user(
    user_in: UserCreate,
    db = Depends(get_database)
):
    user = await db["users"].find_one({"email": user_in.email})
    if user:
        raise HTTPException(
            status_code=400,
            detail="The user with this email already exists in the system.",
        )
    
    user_dict = user_in.dict(exclude={"password"})
    user_dict["hashed_password"] = get_password_hash(user_in.password)
    
    new_user = await db["users"].insert_one(user_dict)
    created_user = await db["users"].find_one({"_id": new_user.inserted_id})
    return created_user

@router.get("/me", response_model=User)
async def read_user_me(current_user: User = Depends(get_current_user)):
    return current_user
