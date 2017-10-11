//import './css/arrow.css';
require('./app');
console.log('ES6 rest and spread loaded');


console.log("/.......... Rest Parameters ........./");

let names = [1,2,3,4];

let name = (a, ...names) => {
	console.log(`value ${a} and  ${names}`);
	console.log(names);
	console.log([...names].length)
}

name('names', 'hello', 'santhosh', 'M');

console.log("/.................../");


function disName(a, ...args) {
	let result = args.map(function(ele) {
		return (a * ele);
	});

	console.log(`/.................../ ${result} `);
}
disName(2,1,2,3);


console.log("/.......... Spread Operators ........./");

let price = [1, 3, 4, 5];
let maximumNumber = Math.max(...price);
console.log(maximumNumber);
console.log(...price);

console.log("/.................../");


let fullNames = ['santhosh', 'kumar', 'm']
let printNames = (a,b,c) => {
	console.log(a + " " + b + " " + c);
}

printNames(...fullNames);

console.log("/.................../");

let ba = "Santhosh Kumar";

let baNames = (...a) => {
	console.log(a)
}

baNames(...ba);



console.log("/.................../");
let arrayText = ['A', ..."123", "E"];
console.log(arrayText);

console.log("/.......   Cancat array with spread operator............/");

let a = [1,2,3];
let b = [5,6,7];

console.log([1,2,3,4, ...b, 12,12,13]);
