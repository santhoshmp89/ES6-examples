//import './css/arrow.css';

console.log('ES6 arrow loaded');


console.log("/.......... Simple arrow function ........./");
let simple = () => 'Simple return arrow function';
console.log(simple());
console.log("/.................../");


console.log("/.......... Arrow function with add two number........./");
let calculate = (a, b) => a + b;
console.log(calculate(2, 3)) 


console.log("/.................../");






console.log("/.......... Arrow function this scope ........./");

let person = {
	name : "Santhosh",
	age: 29,
	displayDetails : function () {
		console.log(`Person name is ${this.name} and age is ${this.age}`);
		console.log(this);

		var addName = () => {
			console.log(`${this.name} Kumar M`);
		}

		addName();
	}
}

person.displayDetails();

console.log("/.................../");


console.log("/.......... Arrow function this default scope ........./");

let abc = (a=1, b=2) => console.log(a, b);

abc();

console.log("/.................../");

let name = (firstname, lastname, fullname = firstname + lastname) => {
	console.log(`Person firstname is ${firstname} and fullname is ${fullname}`)
}

name('Santhosh', 'Kumar');

console.log("/.................../");

let getTax = () => 0.07;

let calculateTax = (ammount = tax, tax = getTax()) => {
	console.log(ammount + tax);
}

calculateTax(5);

console.log("/.................../");