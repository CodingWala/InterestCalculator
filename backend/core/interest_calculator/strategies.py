from abc import ABC, abstractmethod

class InterestStrategy(ABC):
    @abstractmethod
    def calculate(self, principal: float, rate: float, time: float) -> float:
        pass

class SimpleInterest(InterestStrategy):
    def calculate(self, principal: float, rate: float, time: float) -> float:
        return (principal * rate * time) / 100

class CompoundInterest(InterestStrategy):
    def calculate(self, principal: float, rate: float, time: float) -> float:
        return principal * ((1 + rate / 100) ** time) - principal

