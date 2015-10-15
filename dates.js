console.log(Date()) // Displaying date
console.log(new Date()) // Creating Date Objects
// console.log(new Date(milliseconds)) // Creating Date Objects
// console.log(new Date(dateString)) // Creating Date Objects
// console.log(new Date(year, month, day, hours, minutes, seconds, milliseconds)) // Creating Date Objects
var a = new Date("October 14, 2015 20:44:00"); console.log(a);
var b = new Date(86400000); console.log(b); // zero time plus the number
var c = new Date(99,5,24,11,33,30,0); console.log(c);
var d = new Date(99,5,24); console.log(d);
var e = new Date; console.log(e.toString()); // to String 
console.log(e.toUTCString()); // to UTC string 
console.log(e.toDateString()); // to Date string 

  // Date Methods //
var f = new Date(); console.log(f.getTime()); // milliseconds
console.log(f.getFullYear()); // year 
console.log(f.getDay()); // weekday as a number (0-6) 
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; console.log(days[f.getDay()]); 
console.log(f.setFullYear(2020, 0, 14)); // 
console.log(f.setDate(20)); // 
console.log(f.setDate(f.getDate() + 50)); // add dates to a date 
var msec = Date.parse("March 21, 2012"); console.log(msec) // to milliseconds 
var date = new Date(msec); console.log(date) // to date 
