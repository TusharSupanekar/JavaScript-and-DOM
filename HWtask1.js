var a = prompt("Enter text");
console.log(a.length);                 //1)
console.log(a.toUpperCase());          //2)
console.log(a.toLowerCase());          //3)

var b = prompt("Enter your name");
var c = b.charAt(0).toUpperCase();
var d = b.substring(1,a.length).toLowerCase();          //4)
var result = c+d;
console.log(result);

 
var j = prompt("Enter text to be reversed");
var k =j;

console.log(k.split("").reverse().join(""));          //5)



var e = prompt("enter word to replace");
var f = e;
var g = "I am Learning how to substitute";      //7)
console.log(g.replace("substitute", f));


var h = " Hi how are you? I am Tushar Supanekar learning javascript. ";
console.log(h);
console.log(h.length);                                                                                  //8)
var i = h.trim();
console.log(i);
console.log(i.length);

