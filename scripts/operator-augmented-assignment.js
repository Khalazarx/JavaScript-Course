document.writeln("<h3>Operator Augmented Assignment</h3>");
// This operator allows you to perform an operation and assign the result to a variable in one step.

let x = 10;
let y = 5;
let value = x + y; // Using the addition operator to add x and y
document.writeln("value of x = " + x + "<br>");
document.writeln("value of y =  " + y + "<br>");
document.writeln("<br>")
// Using augmented assignment operators

value += y; // Equivalent to value = value + y
document.writeln("After value += y," + "<br>");
document.writeln("value of value = " + value + "<br>"); // value is now 20
document.writeln("<br>")

value *= 3; // Equivalent to value = value * 3
document.writeln("After value *= 3," + "<br>");
document.writeln("value of value = " + value + "<br>"); // value is now 60

document.writeln("<br>")
x += y; // Equivalent to x = x + y
document.writeln("After x += y," + "<br>");
document.writeln("value of x = " + x + "<br>"); // x is now 15