from fastapi import APIRouter
from pydantic import BaseModel

from backend.app.services.interest_service import (
    calculate_interest,
)

router = APIRouter(prefix="/interest")


class InterestRequest(BaseModel):
    calc_type: str
    principal: float
    rate: float
    time: float


@router.post("/calculate")
def calculate(data: InterestRequest):
    return calculate_interest(
        calc_type=data.calc_type,
        principal=data.principal,
        rate=data.rate,
        time=data.time,
    )
