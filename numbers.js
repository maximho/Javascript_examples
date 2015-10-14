var x = 123e5; console.log(x);
var y = 123e-5; console.log(y);
var z = 123;
var s = z.toString(); console.log(s); console.log(typeof s); 
var e = z.toExponential(2); console.log(e);
var n = 9.656; var f = n.toFixed(2); console.log(f); console.log(typeof f);  
var p = n.toPrecision(); console.log(p); console.log(typeof p); 
console.log(Number(true)); console.log(Number(false)); 
console.log(Number("10")); console.log(Number("10 20"));
console.log(parseInt("10")); console.log(parseInt("10.33"));
console.log(parseInt("10 years")); console.log(parseInt("years 10"));
console.log(parseFloat("10")); console.log(parseFloat("10.33"));
console.log(parseFloat("10 years")); console.log(parseFloat("years 10"));
console.log(z.valueOf()); console.log((123).valueOf()); console.log((100+23).valueOf());

