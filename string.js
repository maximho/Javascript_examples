var v = "We are the so called \"Vikings\" from the North";
console.log(v);

var i = v.indexOf("the"); console.log(i);
var l = v.lastIndexOf("the"); console.log(l);
var s = v.search("the"); console.log(s);
var c = v.slice(7,10); console.log(c);
var u = v.substr(7,3); console.log(u);
var r = v.replace("North","South"); console.log(r);
var p = v.toUpperCase(); console.log(p); 
var o = v.toLowerCase(); console.log(o); 
var v2 = "of the World"
var n = v.concat(" ",v2); console.log(n); 
var h = v.charAt(7); console.log(h); 
var a = v.charCodeAt(8); console.log(a); 
var y = v.split(" "); console.log(y); 

var str = "Hello";
var arr = str.split("");
var text = "";
var i;
for (i = 0; i < arr.length; i++) {
  text += arr[i] 
}
console.log(text)
