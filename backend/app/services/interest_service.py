from backend.core.interest_calculator.factory import InterestFactory


def calculate_interest(
    calc_type: str,
    principal: float,
    rate: float,
    time: float,
):
    strategy = InterestFactory.get_strategy(calc_type)

    interest = strategy.calculate(
        principal=principal,
        rate=rate,
        time=time,
    )

    return {
        "interest": round(interest, 2),
        "total_balance": round(principal + interest, 2),
    }