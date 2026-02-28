function getNumbers() {
    var n1 = document.getElementById("num1");
    var n2 = document.getElementById("num2");
    var num1 = Number(n1.value);
    var num2 = Number(n2.value);
    return [num1, num2];
}
function add() {
    var _a = getNumbers(), a = _a[0], b = _a[1];
    console.log("Addition:", a + b);
}
function subtract() {
    var _a = getNumbers(), a = _a[0], b = _a[1];
    console.log("Subtraction:", a - b);
}
function multiply() {
    var _a = getNumbers(), a = _a[0], b = _a[1];
    console.log("Multiplication:", a * b);
}
function divide() {
    var _a = getNumbers(), a = _a[0], b = _a[1];
    if (b === 0) {
        console.log("Division by zero not allowed");
    }
    else {
        console.log("Division:", a / b);
    }
}
