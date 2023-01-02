/*codeing challenge 2
const calcTip = (bill) => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

/*function calcTip(bill) {
	if (bill >= 50 && bill <= 300) {
		return (15 / 100) * bill;
	} else {
		return (20 / 100) * bill;
	}
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(bills, tips);

const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(total);*/

//challenge 3
const mark = {
	fullName: 'Mark Miller',
	mass: 78,
	height: 1.69,

	calcBmi: function () {
		this.markBmi = mark.mass / mark.height ** 2;
		return this.markBmi;
	},
};

mark.calcBmi();
console.log(mark.markBmi);

const john = {
	fullName: 'John Smith',
	mass: 92,
	height: 1.95,

	calcBmi: function () {
		this.johnBmi = john.mass / john.height ** 2;
		return this.johnBmi;
	},
};

console.log(john.calcBmi());

if (mark.markBmi > john.johnBmi) {
	console.log(
		`${mark.fullName}'s Bmi ${mark.markBmi} is higher than ${john.fullName} ${john.johnBmi}`
	);
} else {
	console.log(
		`${john.fullName}'s Bmi ${john.johnBmi} is higher than ${mark.fullName} ${mark.markBmi}`
	);
}

//challenge 4
function calcTip(bill) {
	if (bill >= 50 && bill <= 300) {
		return (15 / 100) * bill;
	} else {
		return (20 / 100) * bill;
	}
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];

for (let i = 0; i < bills.length; i++) {
	tips.push(calcTip(bills[i]));
}

const totals = [];
for (let i = 0; i < tips.length; i++) {
	totals.push(tips[i] + bills[i]);
}

console.log(bills, tips, totals);

//Bonus Challenge 4
function calcAverage(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i]; //sum = sum + arr[i]
	}
	return sum / arr.length;
}

console.log(calcAverage(totals));
console.log(calcAverage(tips));
