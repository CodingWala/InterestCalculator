from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class CompoundInterestRequest(BaseModel):
    principal: float
    rate: float
    years: int


@router.post("/calculate")
def calculate(data: CompoundInterestRequest):
    maturity_amount = data.principal * ((1 + data.rate / 100) ** data.years)

    return {
        "investedAmount": data.principal,
        "estimatedReturns": maturity_amount - data.principal,
        "maturityAmount": maturity_amount,
    }
