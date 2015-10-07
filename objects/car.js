var car = {type:"Fiat", model:500, colour:"White"};
console.log(car.type); //or car["type"]

//The name:values pairs (in JavaScript objects) are called properties.

function ride(person) {
	return "I take " + person + " for a ride in my " + car.type;
}

console.log(ride("Marie"));

//Methods are stored in properties as function definitions.

