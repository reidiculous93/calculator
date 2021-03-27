const display = document.querySelector('#display');
const clear = document.querySelector('#clear')

let memory = 0;

function add (arr) {
	let arrSum = 1;
	for(let i = 0; i < arr.length; i++){
		arrSum = arrSum * arr[i];
	}
	display.innerHTML(arrSum);
}

function subtract (arr) {
	let arrMinus = 1;
	for(let i = 0; i < arr.length; i++){
		arrMinus = arrMinus * arr[i];
	}
	display.innerHTML(arrMinus);
}

function multiply (arr) {
	let arrProduct = 1;
	for(let i = 0; i < arr.length; i++){
		arrProduct = arrProduct * arr[i];
	}
	display.innerHTML(arrProduct);
}

function divide (x, y) {
	// x = parseInt(display.innerHTML);
    // memory = x;
	// memory /= parseInt(display.innerHTML);
    // display.innerHTML = memory;
    display.innerHTML += " / "
}

function operate(opr,x,y){
    switch(opr) {
    case "+":
        add(x, y)
        break;
    case "-":
        subtract(x, y)
        break;
    case "/":
        divide(x, y);
        break;
    case "*":
        multiply(x, y)
    }
}

function clearDisplay(){
    clear.addEventListener("click", () => {display.innerHTML = "";})
}

let n0 = document.querySelector('#zero').addEventListener('click', () => {if(display.innerHTML != 0){ display.innerHTML += 0;}})
let n1 = document.querySelector('#one').addEventListener('click', () => {if(display.innerHTML == 0){clearDisplay();display.innerHTML = 1;} else {display.innerHTML += 1;}})
let n2 = document.querySelector('#two').addEventListener('click', () => {if(display.innerHTML == 0){clearDisplay();display.innerHTML = 2;} else {display.innerHTML += 2;}})
let n3 = document.querySelector('#three').addEventListener('click', () => {if(display.innerHTML == 0){clearDisplay();display.innerHTML = 3;} else {display.innerHTML += 3;}})
let n4 = document.querySelector('#four').addEventListener('click', () => {if(display.innerHTML == 0){clearDisplay();display.innerHTML = 4;} else {display.innerHTML += 4;}})
let n5 = document.querySelector('#five').addEventListener('click', () => {if(display.innerHTML == 0){clearDisplay();display.innerHTML = 5;} else {display.innerHTML += 5;}})
let n6 = document.querySelector('#six').addEventListener('click', () => {if(display.innerHTML == 0){clearDisplay();display.innerHTML = 6;} else {display.innerHTML += 6;}})
let n7 = document.querySelector('#seven').addEventListener('click', () => {if(display.innerHTML == 0){clearDisplay();display.innerHTML = 7;} else {display.innerHTML += 7;}})
let n8 = document.querySelector('#eight').addEventListener('click', () => {if(display.innerHTML == 0){clearDisplay();display.innerHTML = 8;} else {display.innerHTML += 8;}})
let n9 = document.querySelector('#nine').addEventListener('click', () => {if(display.innerHTML == 0){clearDisplay();display.innerHTML = 9;} else {display.innerHTML += 9;}})
let nDot = document.querySelector('#dot').addEventListener('click', () => {if(display.innerHTML.indexOf('.') === -1 && display.innerHTML.length > 0){display.innerHTML += '.'}});
let addBtn = document.querySelector('#add').addEventListener('click', operate("+", x, y));
let subtractBtn = document.querySelector('#subtract').addEventListener('click', operate("-", x, y));
let multiplyBtn = document.querySelector('#multiply').addEventListener('click', operate("*", x, y));
let divideBtn = document.querySelector('#divide').addEventListener('click', operate("/", x ,y));
let equalsBtn = document.querySelector('#equals').addEventListener('click', () => {display.innerHTML = memory;})

