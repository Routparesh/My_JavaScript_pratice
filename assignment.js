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
