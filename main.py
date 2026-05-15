import sys
from src.interest_calculator.factory import InterestFactory

def main():
    print("--- OOP Interest Calculator ---")
    calc_type = input("Enter calculation type (simple/compound): ").strip().lower()
    
    try:
        strategy = InterestFactory.get_strategy(calc_type)
        
        p = float(input("Enter Principal amount: "))
        r = float(input("Enter Annual Interest Rate (%): "))
        t = float(input("Enter Time (years): "))
        
        interest = strategy.calculate(principal=p, rate=r, time=t)
        
        print(f"\nCalculated Interest: {interest:.2f}")
        print(f"Total Balance: {(p + interest):.2f}")
        
    except ValueError as e:
        print(f"Error: {e}", file=sys.stderr)
    except Exception as e:
        print(f"An unexpected error occurred: {e}", file=sys.stderr)

if __name__ == "__main__":
    main()
