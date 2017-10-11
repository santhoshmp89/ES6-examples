//import './css/arrow.css';
require('./app');
console.log('ES6 Object Literal Extension loaded');


console.log("/.......... Object Literal Extension -- 1........./");

let fullName = "Santhos Kumar";
const age = 123;
const name = {
	fullName,
	age
}

name.age = 12312;

console.log(name);


console.log("/.................../");

console.log("/.......... Object Literal Extension -- 2 ........./");

var a = 5, b = 5;
var addNumbers = {
	a: 10,
	b: 10,
	showOutput() {
		console.log(this.a + this.b);
	}
}

addNumbers.showOutput();