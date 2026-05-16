from fastapi import FastAPI
from backend.app.routes.health import router as health_router
from backend.app.routes.interest import router

app = FastAPI(title="Finance Engine API")

app.include_router(health_router)
app.include_router(router)
