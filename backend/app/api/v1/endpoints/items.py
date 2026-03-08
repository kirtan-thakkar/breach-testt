from fastapi import APIRouter, HTTPException, Depends, status
from typing import List
from app.schemas.item import Item, ItemCreate, ItemUpdate
from app.core.database import get_database
from bson import ObjectId
from datetime import datetime

router = APIRouter()

@router.post("/", response_model=Item, status_code=status.HTTP_201_CREATED)
async def create_item(item: ItemCreate, db=Depends(get_database)):
    item_dict = item.dict()
    item_dict["created_at"] = datetime.utcnow()
    item_dict["updated_at"] = datetime.utcnow()
    
    new_item = await db["items"].insert_one(item_dict)
    created_item = await db["items"].find_one({"_id": new_item.inserted_id})
    return created_item

@router.get("/", response_model=List[Item])
async def read_items(skip: int = 0, limit: int = 100, db=Depends(get_database)):
    items = await db["items"].find().skip(skip).limit(limit).to_list(1000)
    return items

@router.get("/{id}", response_model=Item)
async def read_item(id: str, db=Depends(get_database)):
    if not ObjectId.is_valid(id):
        raise HTTPException(status_code=400, detail="Invalid ID format")
    
    if (item := await db["items"].find_one({"_id": ObjectId(id)})) is not None:
        return item
    
    raise HTTPException(status_code=404, detail=f"Item {id} not found")

@router.put("/{id}", response_model=Item)
async def update_item(id: str, item: ItemUpdate, db=Depends(get_database)):
    if not ObjectId.is_valid(id):
        raise HTTPException(status_code=400, detail="Invalid ID format")
        
    update_data = {k: v for k, v in item.dict().items() if v is not None}
    update_data["updated_at"] = datetime.utcnow()

    if len(update_data) >= 1:
        update_result = await db["items"].update_one(
            {"_id": ObjectId(id)}, {"$set": update_data}
        )

        if update_result.modified_count == 1:
            if (updated_item := await db["items"].find_one({"_id": ObjectId(id)})) is not None:
                return updated_item

    if (existing_item := await db["items"].find_one({"_id": ObjectId(id)})) is not None:
        return existing_item

    raise HTTPException(status_code=404, detail=f"Item {id} not found")

@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_item(id: str, db=Depends(get_database)):
    if not ObjectId.is_valid(id):
        raise HTTPException(status_code=400, detail="Invalid ID format")

    delete_result = await db["items"].delete_one({"_id": ObjectId(id)})

    if delete_result.deleted_count == 1:
        return None

    raise HTTPException(status_code=404, detail=f"Item {id} not found")
