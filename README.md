# Object-Oriented Interest Calculator (TDD)

A highly maintainable, test-driven Python application designed to compute simple and compound interest. This project serves as a showcase for solid **Object-Oriented Programming (OOP)**, implementation of **GoF Design Patterns**, and structured **Test-Driven Development (TDD)** using `pytest`.

---

## 🛠️ Design Patterns & Architecture

This application shifts away from rigid structural logic to allow effortless algorithm expansions without breaking core modules.

### 1. Strategy Pattern
Mathematical calculation models are extracted into dedicated strategy classes (`SimpleInterest`, `CompoundInterest`) derived from a unified abstract interface (`InterestStrategy`). This isolates individual mathematical formulas, satisfying the **Open/Closed Principle**—adding a new interest type (e.g., Daily Compounding) requires zero changes to existing strategies.

### 2. Factory Method Pattern
Object creation is deferred to the `InterestFactory` class. The main application requests an abstract calculation model using a simple string token. This dynamic binding cleanly decouples user interface workflows from core business mechanics.

---

## 📂 Project Structure

The layout separates implementation layers from operational pipelines to guarantee independent modular execution:

```text
interest_calculator/
├── pyproject.toml         # Package builder metadata and testing configurations
├── requirements.txt       # Global third-party dependency declarations
├── main.py                # Executable CLI framework script
├── src/
│   └── interest_calculator/
│       ├── __init__.py    # Explicit engine API definitions
│       ├── factory.py     # Strategy generator engine logic
│       └── strategies.py  # Pure mathematical abstraction algorithms
└── tests/
    └── test_calculator.py # Target validation suites running on pytest
```

---

## 🚀 Installation & Local Environment Setup

Follow these steps to safely initialize the runtime environment on your system using an isolated virtual development layer.

### 1. Clone & Navigate to the Project Root
```bash
cd interest_calculator
```

### 2. Configure a Virtual Environment
Isolate execution paths from system-level python modifications to resolve `PATH` discovery issues natively:
```bash
# Generate localized python binary layer
python3 -m venv venv

# Activate shell overrides (macOS / Linux)
source venv/bin/activate
```

### 3. Install Source Dependencies & Local Bindings
Install your test runner tooling and map internal directory structures into local editable path references:
```bash
# Update localized pipeline dependencies
pip install -r requirements.txt

# Link source directories dynamically for package path discovery
pip install -e .
```

---

## 🧪 Test-Driven Development (TDD) Workflow

The system uses `pytest` configuration targets specified within `pyproject.toml`. Run the testing frameworks using any of the commands outlined below.

### Run All Validation Suites
```bash
pytest
```

### Run Coverage Reports
Measure code paths exercised by tests to track functional regressions:
```bash
pytest --cov=src
```

### Direct Module Execution Alternate
If system shell hooks are constrained, invoke the active Python interpreter module directly:
```bash
python3 -m pytest
```

---

## 💻 Running the Application

Execute the CLI wrapper to run live interest calculations interactive with real runtime inputs:

```bash
python main.py
```

### Sample CLI Operation Trace
```text
--- OOP Interest Calculator ---
Enter calculation type (simple/compound): compound
Enter Principal amount: 5000
Enter Annual Interest Rate (%): 6.5
Enter Time (years): 4

Calculated Interest: 1432.33
Total Balance: 6432.33
```