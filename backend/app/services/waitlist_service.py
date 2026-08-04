# from sqlalchemy.orm import Session

# from app.models.waitlist import Waitlist
# from app.utils.referral import generate_referral_code


# class WaitlistService:

#     @staticmethod
#     def create_waitlist(db: Session, email: str, referred_by=None):

#         existing = (
#             db.query(Waitlist)
#             .filter(Waitlist.email == email)
#             .first()
#         )

        
#         if existing:
#             return {
#                 "success": True,
#                 "message": "You're already on the waitlist.",
#                 "queue_position": existing.queue_position,
#                 "referral_code": existing.referral_code,
#             }

#         total_users = db.query(Waitlist).count()

#         queue_position = total_users + 1

#         referral_code = generate_referral_code()

#         while (
#             db.query(Waitlist)
#             .filter(
#                 Waitlist.referral_code == referral_code
#             )
#             .first()
#         ):
#             referral_code = generate_referral_code()

#         user = Waitlist(
#             email=email,
#             referral_code=referral_code,
#             referred_by=referred_by,
#             queue_position=queue_position,
#         )

#         db.add(user)

#         db.commit()

#         db.refresh(user)

#         return {
#             "success": True,
#             "message": "Successfully joined the waitlist.",
#             "queue_position": user.queue_position,
#             "referral_code": user.referral_code,
#         }



# from sqlalchemy.orm import Session

# from app.models.waitlist import Waitlist
# from app.utils.referral import generate_referral_code


# class WaitlistService:

#     REFERRAL_JUMP = 5

#     @staticmethod
#     def create_waitlist(
#         db: Session,
#         email: str,
#         referred_by: str | None = None,
#     ):

#         existing = (
#             db.query(Waitlist)
#             .filter(Waitlist.email == email)
#             .first()
#         )

#         if existing:
#             return {
#                 "success": True,
#                 "message": "You're already on the waitlist.",
#                 "queue_position": existing.queue_position,
#                 "referral_code": existing.referral_code,
#             }

#         queue_position = db.query(Waitlist).count() + 1

#         referral_code = generate_referral_code()

#         while (
#             db.query(Waitlist)
#             .filter(
#                 Waitlist.referral_code == referral_code
#             )
#             .first()
#         ):
#             referral_code = generate_referral_code()

#         user = Waitlist(
#             email=email,
#             referral_code=referral_code,
#             referred_by=referred_by,
#             queue_position=queue_position,
#         )

#         db.add(user)

#         db.flush()

    

#         if referred_by:

#             referrer = (
#                 db.query(Waitlist)
#                 .filter(
#                     Waitlist.referral_code == referred_by
#                 )
#                 .first()
#             )

#             if (
#                 referrer
#                 and referrer.email != email
#             ):

#                 referrer.referral_count += 1

#                 new_position = (
#                     referrer.queue_position
#                     - WaitlistService.REFERRAL_JUMP
#                 )

#                 if new_position < 1:
#                     new_position = 1

#                 referrer.queue_position = new_position

#         db.commit()

#         db.refresh(user)

#         return {
#             "success": True,
#             "message": "Successfully joined the waitlist.",
#             "queue_position": user.queue_position,
#             "referral_code": user.referral_code,
#         }




from sqlalchemy.orm import Session

from app.models.waitlist import Waitlist
from app.utils.referral import generate_referral_code


class WaitlistService:

    REFERRAL_JUMP = 5

    @staticmethod
    def move_up_queue(
        db: Session,
        user: Waitlist,
        jump: int,
    ):
        """
        Move a user up in the queue while keeping
        queue positions unique.
        """

        current_position = user.queue_position

        target_position = max(
            1,
            current_position - jump,
        )

        # Already at the top
        if target_position == current_position:
            return

        # Move everyone else down by one
        users_to_shift = (
            db.query(Waitlist)
            .filter(
                Waitlist.queue_position >= target_position,
                Waitlist.queue_position < current_position,
            )
            .order_by(
                Waitlist.queue_position.desc()
            )
            .all()
        )

        for person in users_to_shift:
            person.queue_position += 1

        # Move rewarded user
        user.queue_position = target_position

    @staticmethod
    def create_waitlist(
        db: Session,
        email: str,
        referred_by: str | None = None,
    ):

        existing = (
            db.query(Waitlist)
            .filter(
                Waitlist.email == email
            )
            .first()
        )

        # Never reveal duplicate emails
        if existing:
            return {
                "success": True,
                "message": "You're already on the waitlist.",
                "queue_position": existing.queue_position,
                "referral_code": existing.referral_code,
            }

        queue_position = (
            db.query(Waitlist).count() + 1
        )

        referral_code = generate_referral_code()

        while (
            db.query(Waitlist)
            .filter(
                Waitlist.referral_code == referral_code
            )
            .first()
        ):
            referral_code = generate_referral_code()

        user = Waitlist(
            email=email,
            referral_code=referral_code,
            referred_by=referred_by,
            queue_position=queue_position,
        )

        try:

            db.add(user)

            # Flush so the user gets an ID before commit
            db.flush()

            # -----------------------------
            # Reward the Referrer
            # -----------------------------

            if referred_by:

                referrer = (
                    db.query(Waitlist)
                    .filter(
                        Waitlist.referral_code == referred_by
                    )
                    .first()
                )

                if (
                    referrer
                    and referrer.email != email
                ):

                    # Increase referral count
                    referrer.referral_count += 1

                    # Move referrer up properly
                    WaitlistService.move_up_queue(
                        db=db,
                        user=referrer,
                        jump=WaitlistService.REFERRAL_JUMP,
                    )

            db.commit()

            db.refresh(user)

            return {
                "success": True,
                "message": "Successfully joined the waitlist.",
                "queue_position": user.queue_position,
                "referral_code": user.referral_code,
            }

        except Exception:

            db.rollback()

            raise


    @staticmethod
    def get_waitlist_dashboard(
        db: Session,
        referral_code: str,
    ):
        """
        Return all information needed for the
        Waitlist Journey page.
        """

        user = (
            db.query(Waitlist)
            .filter(
                Waitlist.referral_code == referral_code
            )
            .first()
        )

        if not user:
            return None

        total_users = db.query(Waitlist).count()

        return {
            "success": True,
            "email": user.email,
            "queue_position": user.queue_position,
            "total_users": total_users,
            "referral_count": user.referral_count,
            "referral_code": user.referral_code,
            "referral_link": f"http://localhost:5173/ref/{user.referral_code}",
            "status": user.status,
            "created_at": user.created_at,
        } 


    
    @staticmethod
    def get_waitlist_stats(
        db: Session,
    ):
        """
        Return public waitlist statistics.
        Anyone can access this endpoint.
        """

        total_users = db.query(Waitlist).count()

        return {
            "success": True,
            "total_users": total_users,
        }   