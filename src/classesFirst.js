//import './css/arrow.css';
require('./app');
console.log('ES6 rest and spread loaded');


console.log("/.......... Classes ........./");

class Employee {
	doWork() {
		return "Complete";	
	}

	logIn() {
		return "Logged In"
	}
}

let emp1 = new Employee();
console.log(emp1.doWork());
console.log(Employee.prototype.doWork.call(emp1))

console.log(`
/.......... Classes - Constructor........./`);

class Student {
	constructor(name) {
		this.name = name;
	}

	displayName() {
		return this.name;
	}
}

let std1 = new Student('Santhosh');
console.log(std1.displayName());
console.log(std1);

console.log(`
/.......... Classes - Declaration........./`);

class Art {
	constructor(name, year) {
		this.name = name;
		this.year = year;
	}
}

let art1 = new Art('Arts1', '2007');
console.log(art1.name + " " + art1.year);


console.log(`
/.......... Classes - Expression........./`);

let Social = class {
	constructor(name, year) {
		this.name = name;
		this.year = year;
	}
}

let soc1 = new Social('Social1', 2009);
console.log(soc1.name + " " + soc1.year);



console.log(`
/.......... Classes - Getter and Setter........./`);

class Teacher {
	constructor(name, subject) {
		this.name = name;
		this.subject = subject;
	}

	set subject(sub) {
		this._subject = sub;
	}

	get subject() {
		return this._subject;
	}
}

let tchr = new Teacher('Santhosh', 'Social');
tchr.subject = "Science";
console.log(tchr.subject);
console.log(tchr.subject);

console.log(`
/.......... Classes - Inheritance ........./`);

class Manager {
	constructor(name) {
		this.name = name;
		this.show = function() {
			console.log('show() is called');
		}
	}

	displayName() {
		return this.name;
	}
}

let man1 = new Manager('Santhosh');
console.log(man1.displayName());
console.log(`/.......... Inheritance ........./`);

class Developer extends Manager {

}

let dev1 = new Developer('Kumar');
console.log(dev1.displayName());

console.log(`/.......... Inheritance - Super ........./`);

class Qa extends Manager {
	constructor(name, title) {
		super(name);
		this.title = title;		
	}

	displayName() {
		return super.displayName() + " Qa "
	}

	displayTitle() {
		return this.title + " " + super.displayName();
	}

}

let qa1 = new Qa('Manoj', 'Qa Manager');
console.log(qa1.displayName());
console.log(qa1.displayTitle());
console.log(qa1.show());
console.log(qa1);


console.log(`
/.......... Inheritance - non-constructible object ........./`);

var abc = {
	name: "Kannada",
	displayName: function() {
		return this.name;
	}
}

class lang {

}

Object.setPrototypeOf(lang.prototype, abc);

var lang1 = new lang();

console.log(lang1.displayName())


console.log(`
/.......... Inheritance - non-constructible object ........./`);

class Names {
	constructor(name, age) {
		this.name= name;
		this.age = age;
	}

	static displayNames() {
		return "displayNames";
	}

	static displayDetails() {
		return(this.displayNames(), "displayDetails");
	}
}

class names1 extends Names {
	static displayDetails() {
		return super.displayDetails();
	}
}

let na = new Names('Kumar',28);

console.log(na);
console.log(Names.displayDetails());
console.log(names1.displayDetails(), 'names class')