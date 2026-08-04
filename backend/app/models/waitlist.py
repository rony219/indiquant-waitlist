from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.sql import func

from app.database.database import Base


class Waitlist(Base):
    __tablename__ = "waitlist"

    id = Column(Integer, primary_key=True, index=True)

    email = Column(String(255), unique=True, nullable=False, index=True)

    referral_code = Column(String(20), unique=True, nullable=False)

    referred_by = Column(String(20), nullable=True)

    referral_count = Column(Integer, default=0, nullable=False) #change here

    queue_position = Column(Integer, nullable=False)

    status = Column(String(20), default="WAITING")

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )