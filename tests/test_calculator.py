import pytest

# Explicit absolute imports from the internal package structure
from backend.core.interest_calculator.strategies import SimpleInterest, CompoundInterest
from backend.core.interest_calculator.factory import InterestFactory


def test_simple_interest_calculation():
    strategy = SimpleInterest()
    assert strategy.calculate(principal=1000, rate=5, time=2) == 100.0


def test_compound_interest_calculation():
    strategy = CompoundInterest()
    assert round(strategy.calculate(principal=1000, rate=5, time=2), 2) == 102.50


def test_factory_returns_correct_strategy():
    factory = InterestFactory()
    assert isinstance(factory.get_strategy("simple"), SimpleInterest)
    assert isinstance(factory.get_strategy("compound"), CompoundInterest)
