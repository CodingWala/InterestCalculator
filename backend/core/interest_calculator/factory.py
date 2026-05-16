from .strategies import InterestStrategy, SimpleInterest, CompoundInterest


class InterestFactory:
    @staticmethod
    def get_strategy(calculator_type: str) -> InterestStrategy:
        strategies = {"simple": SimpleInterest, "compound": CompoundInterest}
        if calculator_type not in strategies:
            raise ValueError(f"Unknown calculator type: {calculator_type}")
        return strategies[calculator_type]()
