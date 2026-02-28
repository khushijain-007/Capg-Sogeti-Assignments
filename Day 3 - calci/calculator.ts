function getNumbers(): [number, number] {
    const n1 = document.getElementById("num1") as HTMLInputElement;
    const n2 = document.getElementById("num2") as HTMLInputElement;

    const num1: number = Number(n1.value);
    const num2: number = Number(n2.value);

    return [num1, num2];
}

function add(): void {
    const [a, b] = getNumbers();
    console.log("Addition:", a + b);
}

function subtract(): void {
    const [a, b] = getNumbers();
    console.log("Subtraction:", a - b);
}

function multiply(): void {
    const [a, b] = getNumbers();
    console.log("Multiplication:", a * b);
}

function divide(): void {
    const [a, b] = getNumbers();
    if (b === 0) {
        console.log("Division by zero not allowed");
    } else {
        console.log("Division:", a / b);
    }
}