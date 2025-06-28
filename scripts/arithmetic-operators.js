// note: 
// + means added
// - means deleted
// * means times changed
// ** means changed
// / means divided by
// % means modulus (remainder of division)
// = means equal
// == means equal to
// != means not equal to


let a = 20;
let b = 31;
let calculate = a + b;


document.writeln("<h3>Arithmetic Operators</h3>");
document.writeln("description: " + "<br>" + "<br>")
document.writeln("a = 20");
document.writeln("<br>");
document.writeln("b = 31");
document.writeln("<p>a + b = " + calculate + "</p>")

// more arithmetic operators and exploration

document.writeln("<h3>More Sample Arithmetic Operators</h3>");

let calculate2 = 2 * 3;
document.writeln("<p>2 x 3 = " + calculate2 + "</p>")

calculate2 = calculate2 / 2;
document.writeln("<p>2 x 3 : 2 = " + calculate2 + "</p>")

calculate2 = 10 - 5;
document.writeln("<p>10 - 5 = " + calculate2 + "</p>")

calculate2 = 10 % 2 + 2;
document.writeln("<p>10 % 2 + 2 = " + calculate2 + "</p>") 
// 10 % 2 = 0 , 0 + 2 = 2



document.writeln("<h3>Calculation can change here for continuation</h3>")
let perhitungan = 200 / 5 + 10 - 3;
document.writeln("<p>1. 200 / 5 + 10 - 3 = " + perhitungan + "</p>");


// perhitungan can change here for continuation
perhitungan = perhitungan * 12; 
document.writeln("<p>2. (200 / 5 + 10 - 3) * 12 = " + perhitungan + "</p>");

// perhitungan can change here for continuation
perhitungan = perhitungan % 7;
document.writeln("<p>3. ((200 / 5 + 10 - 3) * 12) % 7 = " + perhitungan + "</p>");