from fastapi import FastAPI

from backend.app.routes.interest import router

app = FastAPI(title="Finance Engine API")

app.include_router(router)