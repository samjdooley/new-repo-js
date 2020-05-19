function add () {
	let sum = 0;
	for (var i = 0; i < arguments.length; i++) {
		sum += arguments[i]
	} return sum
}

function subtract (a,b) {
	return a - b
}

function sum (arr) {
	let sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i]
	} return sum 
}

function multiply (arr) {
	let multiple = 1;
	for (var i = 0; i < arr.length; i++) {
		multiple *= arr[i]
	} return multiple 
}

function power(a,b) {
	return a**b
}

function factorial(a) {
	let factorial = 1
	for (var i = 1; i <= a; i++) {
		factorial *= i
	} return factorial
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}