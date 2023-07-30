let prefix = ["Super", "Evil", "Wonderful"];
let midfix = ["Magical", "Mosterous", "Awesom"];
let postfix = ["Hammer", "Axe", "Crossbow"];

let weaponSpec = {
	"Weapon Name": "",
	"Job Classification": ["Attacker", "Support", "Tank", "Defender", "Vanguard"],
	"Weapon Classification": ["1H", "2H"],
	"Weapon Range": ["Melee", "Ranged"],
	"Job Description": "",
	"Job Base Stats": [
		{ Name: "Physical Defense", Min: 5, Max: 100 },
		{ Name: "Physical Melee Attack", Min: 5, Max: 100 },
		{ Name: "Physical Ranged Attack", Min: 5, Max: 100 },
		{ Name: "Magical Defense", Min: 5, Max: 100 },
		{ Name: "Magical Attack", Min: 5, Max: 100 },
	],
};

const random = (size) => Math.round(Math.random() * size);
const pickRandom = (array) => array[random(array.length - 1)];

let newWeapon = (spec) => ({
	name:
		pickRandom(prefix) + " " + pickRandom(midfix) + " " + pickRandom(postfix),
	"Job Classification": pickRandom(spec["Job Classification"]),
	"Weapon Classification": pickRandom(spec["Weapon Classification"]),
	"Weapon Range": pickRandom(spec["Weapon Range"]),
});

console.log(newWeapon(weaponSpec));
console.log(newWeapon(weaponSpec));
