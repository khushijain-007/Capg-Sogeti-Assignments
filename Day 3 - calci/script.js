let currentValue = "0";
let previousValue = "";
let operator = null;

const display = document.getElementById("display");

function updateDisplay() {
    display.innerText = currentValue;
}

function appendNumber(number) {
    if (currentValue === "0" && number !== ".") {
        currentValue = number;
    } else {
        if (number === "." && currentValue.includes(".")) return;
        currentValue += number;
    }
    updateDisplay();
}

function chooseOperator(op) {
    if (operator !== null) {
        calculate();
    }
    previousValue = currentValue;
    operator = op;
    currentValue = "0";
}

function calculate() {
    let result;
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            result = current === 0 ? "Error" : prev / current;
            break;
        default:
            return;
    }

    currentValue = result.toString();
    operator = null;
    previousValue = "";
    updateDisplay();
}

function clearAll() {
    currentValue = "0";
    previousValue = "";
    operator = null;
    updateDisplay();
}

function deleteLast() {
    if (currentValue.length === 1) {
        currentValue = "0";
    } else {
        currentValue = currentValue.slice(0, -1);
    }
    updateDisplay();
}