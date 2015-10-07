person = {
	firstName:"John",
	lastName:"Doe",
	age:45,
	fullName: function() {
		return this.firstName + " " + this.lastName;
	}
};
console.log(person.fullName());
