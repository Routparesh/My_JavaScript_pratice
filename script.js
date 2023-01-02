'use strict';
/*
let hasDriversLicense = false;
const passText = true;

if (passText) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

//arrow function
const calcAge3 = (birthYeah) => 2022 - birthYeah;
const age3 = calcAge3(1994);
console.log(age3);

const yearsUntilRetirement = (birthYeah, names) => {
	const age = 2022 - birthYeah;
	const retirement = 60 - age;
	//return retirement;
	return `${names} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1994, 'Paresh'));
console.log(yearsUntilRetirement(2000, 'Chintu'));

//function inside the function
function cutFruitPieces(fruit) {
	return fruit * 4;
}

function fruitProcessor(apples, oranges) {
	const applePieces = cutFruitPieces(apples);
	const orangePieces = cutFruitPieces(oranges);

	const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pic of oranges.`;
	return juice;
}

console.log(fruitProcessor(2, 3));
*/

/*Arrays
const friends = new Array('paresh', 'bapu', 'chintu');
console.log(friends);
console.log(friends[friends.length - 1]);

//excercise arrays

const years = [1990, 1967, 2002, 2010, 2018];

const calcAge3 = (birthYeah) => 2022 - birthYeah;

const age1 = calcAge3(years[0]);
const age2 = calcAge3(years[1]);
const age3 = calcAge3(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge3(years[0]), calcAge3(years[1]), calcAge3(years[years.length - 1])];
console.log(ages);*/

//Add elements
const friends = ['paresh', 'bapu', 'chintu', 'amar'];
const newlength = friends.push('babali');
console.log(newlength);

friends.unshift('gelhi');
console.log(friends);

//Remove elements
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //first;
console.log(friends);

console.log(friends.indexOf('chintu'));
console.log(friends.indexOf('pupu'));

console.log(friends.includes('bapu'));
console.log(friends.includes('pupu'));

if (friends.includes('bapu')) {
	console.log('You have friend called bapu');
} else {
	console.log('You have no this name friend');
}

/*object
const paresh = {
	firstName: 'paresh',
	lastName: 'rout',
	age: 2022 - 1994,
	job: 'company',
	friends: ['bapu', 'pupu', 'raja'],
};*/

//console.log(paresh.lastName);
//console.log(paresh['lastName']);

const nameKey = 'Name';
//console.log(paresh['first' + nameKey]);
//console.log(paresh['last' + nameKey]);

/*const interestedIn = prompt(
	'what do you want to know about paresh?Choose between firstName ,lastName,age,job,friends'
);
console.log(paresh[interestedIn]);*/
//const xyz = paresh.friends.length;

if (friends.length) {
	console
		.log
		//	`${paresh.firstName} has ${paresh.friends.length} friends ,and his best friends is called ${paresh.friends[0]}`
		();
}

/*const paresh = {
	firstName: 'paresh',
	lastName: 'rout',
	birthYeah: 1994,
	job: 'Web Devloper',
	friends: ['bapu', 'pupu', 'raja'],
	hasDriversLicense: false,

	//calcAge: function (birthYeah) {
	//return 2022 - birthYeah;
	//},

	calcAge: function () {
		console.log(this);
		return 2022 - this.birthYeah;
	},

	//getSummary: function () {
	//if (paresh.hasDriversLicense) {
	//	console.log(
	//		`paresh is a ${paresh.calcAge(paresh.birthYeah)} years old ${
	//			paresh.job
	//		},and he has a driver's license`
	//	);
	//}
	//	},

	getSummary: function () {
		return `${this.firstName} is a ${this.calcAge()} years old ${this.job} , and he has ${
			this.hasDriversLicense ? 'a' : 'no'
		} driver's license.`;
	},
};
//console.log(paresh['calcAge'](1994));

console.log(paresh.getSummary());*/

//for  loop keeps running while condition is true
for (let reap = 1; reap <= 10; reap++) {
	console.log(`lifting weights repetation ${reap}`);
}

const paresh = [
	'paresh',
	'Rout',
	2022 - 1994,
	'web devloper',
	['bapu', 'gelhi', 'chintu', 'mamuni'],
	true,
];

const types = [];

for (let i = 0; i < paresh.length; i++) {
	//reading from paresh array
	console.log(paresh[i], typeof paresh[i]);

	//filling types array
	//types[i] = typeof paresh[i];
	types.push(typeof paresh[i]);
}

console.log(types);

const birthYeah = [1994, 1997, 2000, 1965];
const ages = [];

for (let i = 0; i < birthYeah.length; i++) {
	ages.push(2022 - birthYeah[i]);
}

console.log(ages);

// continue statement
for (let i = 0; i < paresh.length; i++) {
	if (typeof paresh[i] !== 'string') continue;

	console.log(paresh[i], typeof paresh[i]);
}

//break statement
for (let i = 0; i < paresh.length; i++) {
	if (typeof paresh[i] === 'number') break;

	console.log(paresh[i], typeof paresh[i]);
}

//reverse Loop
for (let i = paresh.length - 1; i >= 0; i--) {
	console.log(i, paresh[i]);
}

//Nested Loop
for (let excercise = 1; excercise < 4; excercise++) {
	console.log(`------Starting exercise ${excercise}`);

	for (let rep = 1; rep < 6; rep++) {
		console.log(`Excercise ${excercise}: Lifting weight repetition ${rep}
		🏋️‍♂️🏋️‍♀️`);
	}
}

//while loop
let rep = 1;
while (rep <= 10) {
	//console.log(`While: Lifting wights repetition ${rep}`);
	rep++;
}

//Random number generator
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
	console.log(`You rolled a ${dice}`);
	dice = Math.trunc(Math.random() * 6) + 1;
	if (dice === 6) {
		console.log('Loop about to end');
	}
}
