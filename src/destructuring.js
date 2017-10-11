//import './css/arrow.css';
require('./app');
console.log('ES6 Destructuring loaded');


console.log("/.......... Destructuring Array -- 1........./");
let a = [1,2,3];
let [one, two, three, fourth] = a;
console.log(one, two, three, fourth);
console.log("fourth will be undefined");


console.log("/.......... Destructuring Array -- 1  - default value........./");
let b = [1,2,3];

let [onee, twoe, threee, fourthe = 4] = b;

console.log(onee, twoe, threee, fourthe);

console.log("/.......... Destructuring Array -- 1  - Skipping value........./");
let c = [1,2,3,4];
let [x, ,z] = c;
console.log(x, z);
console.log(typeof x);

console.log("/.......... Destructuring Array -- 1  - Assigning rest of array to variable ........./");
let name = ['santhosh', 'kumar', 28, 'single'];
let details = ['28', 'single'];

let [first, ...rest] = name;
console.log(typeof rest);
console.log([first, ...details]);

console.log(`/.......... Destructuring Objects -- 2........./
................................................`);
const person = {
	name: 'santhosh',
	age: 28,
	facts: {
		hobby: 'Reading',
		work: 'Software Developer'
	}
}

const {name: name1, age} = person;
console.log(name1, age);

console.log(`/.......... Destructuring Objects -- 2 - Nested Values........./`);

const {facts: {work}} = person;
console.log(work);

console.log(`/.......... Default Values ......../
................................................`);

let showName = function(name="santhosh") {
	
	console.log(name);
}
showName(undefined);

console.log(`
/.......... Default Values later default values......../`);

let displayName = function(firstname = "Santhosh", lastname = "Kumar", fullname = firstname + lastname) {
	console.log(fullname);
}
displayName();


console.log(`
/.......... Default Values with destructuring......../`);
function hello( [x, y]= [1,2], {q= 3} = {q: 3}) {
	return (x + y + q);
}
console.log(hello())

console.log(`
/.......... Default Values --  Assignment without declaration  ......../`);
({a, b} = {a: 1, b:2});
console.log(a, b);


console.log(`
/.......... Default Values --  Assigning to new variables names and providing default values  ......../`);
var {aa:aaa = 5, bb:bbb =6, cc:{qq: ccc}} = {aa: 10, bb: 20, cc: { qq : 30}};
console.log(aaa, bbb, ccc);


console.log(`
/.......... Default Values --  Unpacking fields from objects passed as function parameter  ......../`);

const user = {
	id: 12,
	details: {
		//firstname: "santhosh",
		lastname: 'kumar',
		age: 28
	}
}

function userId({id}) {
	console.log(id);
}

function displayUser({id, details: {firstname: fname = "aasa", lastname: lname, age: age}}) {
	console.log(`id ${id} -- Name : ${fname} ${lname} and age is ${age}`);
}

userId(user);
displayUser(user);



console.log(`
/.......... Default Values --  Setting a function parameter's default value  ......../`);

function doubleNumber({firstNumber = '1', secondNumber = '2', aaaa: {m: m} }){
	return (firstNumber * secondNumber + m)
}

console.log(doubleNumber({firstNumber: 10, secondNumber: 20, aaaa: {m: 80}}));

