/*
const myCountry = {
	country: 'India',
	capital: 'Delhi',
	population: 1334,
	language: 'Hindi',
	neighbours: ['pakistan', 'bangladesh', 'nepal', 'bhutan', 'srilanka'],
	describe: function () {
		return `${this.country} has ${this.population} million ${this.language} speaking people ,${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
	},

	checkIsland: function () {
		this.isIsland = `${this.neighbours.length ? !true : true}`;
		return this.isIsland;
	},
};

console.log(myCountry.describe());
console.log(myCountry.checkIsland());

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people ,and ${myCountry.neighbours.length} neighbouring countries 
and a capital called ${myCountry.capital}.`);

console.log(myCountry.population + 2);

//myCountry['population'] -= 2;
console.log(myCountry['population'] - 2);

//for loop
for (let i = 1; i <= 50; i++) {
	console.log(`Voter No ${i} currently voting`);
}

function percentageOfWorld1(population) {
	return (population / 7900) * 100;
}

let populations = [1441, 1334, 664, 224, 176];
let percentage2 = [];
for (let i = 0; i < populations.length; i++) {
	percentage2.push(percentageOfWorld1(populations[i]));
}
console.log(percentage2);

//Loop inside loop
const listOfNeighbours = [['canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
for (let i = 0; i < listOfNeighbours.length; i++) {
	for (let j = 0; j < listOfNeighbours[i].length; j++) {
		console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
	}
}

//while  loop
let percentage2 = [];
let i = 0;
while (i < populations.length) {
	const perc = percentage2.push(percentageOfWorld1(populations[i]));
	i++;
}
console.log(percentage2);*/
