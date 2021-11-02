function askUser(message) {
	return prompt(message)
}

const ENTERED_NOTHING = "It's pity, you don't want us to know your ";
const CAPITAL = "You live in the capital of ";
const JUST_CITY = "You live in ";
const SPORT_HERO = "Wow! Do you wanna be like ";
const JUST_SPORT = "It's nice you're interested in sports"

const age = askUser("What is the year of your birth?");
const city = askUser("What is the city you live in?");
const sport = askUser("What is your favourite kind of sport?");

let countAge = null;
let chosenCity = null;
let chosenSport = null;

//---------------------------choosing what to show about age-----------------------------------
if (!age || age === "null" || !age.trim() || isNaN(+age) || typeof (+age) !== "number") {
	countAge = ENTERED_NOTHING + " age..."
} else {
	countAge = `You are ${2021 - age} years old.`;
};

//---------------------------choosing what to show about city----------------------------------
if (city === "null" || !city || !city.trim()) {
	chosenCity = ENTERED_NOTHING + " city..."
} else {
	switch (city) {
		case "Kyiv":
			chosenCity = CAPITAL + " Ukraine :) ";
			break;
		case "Moscow":
			chosenCity = CAPITAL + " rf. Leave it as soon as you can!";
			break;
		case "Minsk":
			chosenCity = CAPITAL + " Belarus. Leave it as soon as you can!";
			break;
		default:
			chosenCity = JUST_CITY + " " + city;
	};
};

//-------------------------choosing what to show about favourite sport--------------------------
if (sport === "null" || !sport || !sport.trim()) {
	chosenSport = ENTERED_NOTHING + " favourite sport..."
} else {
	switch (sport) {
		case "Boxing":
			chosenSport = SPORT_HERO + " Usik? :) ";
			break;
		case "Football":
			chosenSport = SPORT_HERO + " Ronaldo? :) ";
			break;
		case "Basketball":
			chosenSport = SPORT_HERO + " Jordan? :) ";
			break;
		default:
			chosenSport = JUST_SPORT;
	}
};

//--------------------------------showing on the screen----------------------------------------
alert(`${countAge}
${chosenCity}
${chosenSport}`)