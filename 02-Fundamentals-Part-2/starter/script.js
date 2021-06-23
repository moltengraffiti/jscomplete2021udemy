"use strict";

const sam = {
	firstname: "sam",
	birthyear: 1980,

	calcAgeAtYear: function (year) {
		//can add an attribute to sam
		this.age = year - this.birthyear;
		return this.age;
	},

	getSummary: function (year) {
		return `${this.firstname} is ${this.calcAgeAtYear(2021)} years old`;
	},
};

console.log(sam);
//const agethisyear = sam.calcAgeAtYear(2021);
//console.log(agethisyear);
const agey = sam.calcAgeAtYear(2021);
console.log(sam.calcAgeAtYear(2021));
console.log(agey);
console.log(sam);

console.log(sam.getSummary(2021));
