# from fastapi import FastAPI

# from app.database.database import engine, Base

# app = FastAPI(
#     title="IndiQuant Waitlist API"
# )


# @app.on_event("startup")
# def startup():
#     Base.metadata.create_all(bind=engine)


# @app.get("/")
# def home():
#     return {
#         "message": "Database Connected Successfully!"
#     }




# from fastapi import FastAPI

# from app.database.database import Base, engine

# from app.models.waitlist import Waitlist

# from app.routers.waitlist import router as waitlist_router

# app = FastAPI(
#     title="IndiQuant Waitlist API",
#     version="1.0.0",
# )

# Base.metadata.create_all(bind=engine)

# app.include_router(waitlist_router)


# @app.get("/")
# def home():
#     return {
#         "message": "IndiQuant Waitlist API Running 🚀"
#     }





from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database.database import Base, engine
from app.models.waitlist import Waitlist
from app.routers.waitlist import router as waitlist_router

app = FastAPI(
    title="IndiQuant Waitlist API",
    version="1.0.0",
)

# Create database tables
Base.metadata.create_all(bind=engine)

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://indiquant-waitlist.vercel.app",
        "https://join.indiquantresearch.in",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(waitlist_router)


@app.get("/")
def home():
    return {
        "message": "IndiQuant Waitlist API Running 🚀"
    }