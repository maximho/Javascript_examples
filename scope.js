#Local Variable
function driveOne() {
	var car = "Volvo";
}
driveOne();
console.log("I drive with my " + typeof car);

#Global Variable
var auto = "Audi";
function driveTwo() {
console.log("I drive with my " + typeof auto);
}
driveTwo();
