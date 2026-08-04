# from fastapi import APIRouter
# from fastapi import Depends

# from sqlalchemy.orm import Session

# from app.database.database import get_db

# from app.schemas.waitlist import WaitlistCreate

# from app.services.waitlist_service import WaitlistService


# router = APIRouter(
#     prefix="/api/waitlist",
#     tags=["Waitlist"],
# )


# @router.post("/")
# def join_waitlist(
#     data: WaitlistCreate,
#     db: Session = Depends(get_db),
# ):

#     return WaitlistService.create_waitlist(
#         db=db,
#         email=data.email,
#         referred_by=data.referral_code,
#     )




from fastapi import APIRouter, Depends, HTTPException

from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas.waitlist import WaitlistCreate
from app.services.waitlist_service import WaitlistService


router = APIRouter(
    prefix="/api/waitlist",
    tags=["Waitlist"],
)


@router.post("/")
def join_waitlist(
    data: WaitlistCreate,
    db: Session = Depends(get_db),
):

    return WaitlistService.create_waitlist(
        db=db,
        email=data.email,
        referred_by=data.referral_code,
    )



@router.get("/stats")
def get_waitlist_stats(
    db: Session = Depends(get_db),
):
    return WaitlistService.get_waitlist_stats(db)


@router.get("/{referral_code}")
def get_waitlist_dashboard(
    referral_code: str,
    db: Session = Depends(get_db),
):

    data = WaitlistService.get_waitlist_dashboard(
        db=db,
        referral_code=referral_code,
    )

    if data is None:
        raise HTTPException(
            status_code=404,
            detail="User not found",
        )

    return data