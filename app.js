

function add (x, y) {
	return x + y;
}

function subtract (x, y) {
	return x - y;
}

function multiply (arr) {
	let arrProduct = 1;
	for(let i = 0; i < arr.length; i++){
		arrProduct = arrProduct * arr[i];
	}
	return arrProduct;
}

function divide (x, y) {
	return x / y;
}
