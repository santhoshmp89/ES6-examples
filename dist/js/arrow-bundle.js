/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//import './css/arrow.css';

console.log('ES6 arrow loaded');

console.log("/.......... Simple arrow function ........./");
var simple = function simple() {
	return 'Simple return arrow function';
};
console.log(simple());
console.log("/.................../");

console.log("/.......... Arrow function with add two number........./");
var calculate = function calculate(a, b) {
	return a + b;
};
console.log(calculate(2, 3));

console.log("/.................../");

console.log("/.......... Arrow function this scope ........./");

var person = {
	name: "Santhosh",
	age: 29,
	displayDetails: function displayDetails() {
		var _this = this;

		console.log('Person name is ' + this.name + ' and age is ' + this.age);
		console.log(this);

		var addName = function addName() {
			console.log(_this.name + ' Kumar M');
		};

		addName();
	}
};

person.displayDetails();

console.log("/.................../");

console.log("/.......... Arrow function this default scope ........./");

var abc = function abc() {
	var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
	return console.log(a, b);
};

abc();

console.log("/.................../");

var name = function name(firstname, lastname) {
	var fullname = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : firstname + lastname;

	console.log('Person firstname is ' + firstname + ' and fullname is ' + fullname);
};

name('Santhosh', 'Kumar');

console.log("/.................../");

var getTax = function getTax() {
	return 0.07;
};

var calculateTax = function calculateTax() {
	var ammount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : tax;
	var tax = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getTax();

	console.log(ammount + tax);
};

calculateTax(5);

console.log("/.................../");

/***/ })

/******/ });