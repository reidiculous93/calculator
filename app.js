const display = document.querySelector('#display');
const clearBtn = document.querySelector('#clear');
const numBtns = document.querySelectorAll('.number-btn');
const oprBtns = document.querySelectorAll('.operator-btn');
const equalsBtn = document.querySelector('#equals');
const pointBtn = document.querySelector('#dot')

let firstOperand = "";
let secondOperand = "";
let currentOperation = null;
let shouldResetDisplay = false;

window.addEventListener("keydown", setInput);
equalsBtn.addEventListener('click', evaluate);
clearBtn.addEventListener('click', clearDisplay);
pointBtn.addEventListener('click', appendPoint);

numBtns.forEach((button) =>
button.addEventListener('click', () => appendNumber(button.textContent)));

oprBtns.forEach((button) =>
button.addEventListener('click', () => setOperation(button.textContent)));

function appendNumber(number) {
    if (display.textContent === "0" || shouldResetDisplay ) resetDisplay();{
        display.textContent += number;
    }
    
}

function resetDisplay() {
    display.textContent = "";
    shouldResetDisplay = false;
}

function clearDisplay(){
    display.textContent = "0";
    firstOperand = "";
    secondOperand = "";
    currentOperation = null;
}

function appendPoint() {
    if (shouldResetDisplay) resetDisplay();
    if (display.textContent === "") display.textContent = "0";
    if (display.textContent.includes(".")) return;
    display.textContent += ".";
}

function setOperation(opr){
    if (currentOperation !== null) evaluate();
    firstOperand = display.textContent;
    currentOperation = opr;
    shouldResetDisplay = true;
}

function evaluate(){
    if (currentOperation === null || shouldResetDisplay) return;
    if (currentOperation === "÷" && display.textContent === "0") {
        alert("You can't divide by 0!");
        clearDisplay();
        return;
    }
    secondOperand = display.textContent;
    display.textContent = roundResult(
        operate(currentOperation, firstOperand, secondOperand)
    );
    currentOperation = null;
}

function roundResult(number) {
    return Math.round(number * 1000)/ 1000;
}

function setInput(e) {
    if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
    if (e.key === '.') appendPoint();
    if (e.key === "=" || e.key === "Enter") evaluate();
    if (e.key === "Backspace") deleteNumber();
    if (e.key === "Escape") clearDisplay();
    if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/")
        setOperation(convertOperator(e.key));
}

function convertOperator(keyboardOperator) {
    if (keyboardOperator === "/") return "÷";
    if (keyboardOperator === "*") return "x";
    if (keyboardOperator === "-") return "-";
    if (keyboardOperator === "+") return "+";
}

function add (a,b) {
	return a + b;
}

function subtract (a,b) {
	return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (a, b) {
	return a / b;
}

function operate(opr,a,b){
    a = Number(a);
    b = Number(b);
    switch(opr){
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "x":
        return multiply(a,b);
        case "÷":
            if (b === 0) return null;
            else return divide(a,b);
        default:
            return null;
    }
}
