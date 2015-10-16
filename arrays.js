var cars = ["Audi", "Volvo", "BMW"];
console.log(cars[0]);

var autos = new Array("Opel", "Peugot", "Fiat");
console.log(autos);
autos[0] = "Renault";
console.log(autos);

var person = {firstName:"John", age:34, eyesColour:"brown"}; console.log(person);

console.log(cars.length);
console.log(cars.sort());

cars.push("Ford"); console.log(cars);
cars[cars.length] = "Torino"; console.log(cars);

var index;
var text = "";
var fruits = ["Banana", "Apple", "Orange"];
for (index = 0; index < fruits.length; index++) {
  text += fruits[index] + " ";
}
console.log(text);

console.log(cars.constructor);
console.log(person.constructor);

console.log(cars.toString());
console.log(cars.valueOf());
console.log(cars.join(" * "));









cars.pop(); console.log(cars);
