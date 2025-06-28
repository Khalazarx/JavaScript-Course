document.writeln("<h3>Make a variable</h3>");

// documentation

document.writeln("U can make with let in javascript, let is a container to store data, you can use var, let, or const to declare a variable." + "<br>");

document.writeln("<pre> let fullName = \"Sherlock Holmes\";</pre>");
document.writeln("<pre> let age = 40;</pre>");
document.writeln("<pre> let job = \"Detektif\";</pre>");
document.writeln("<pre> let address = \"221B Baker Street, London\";</pre>");
document.writeln("<pre> let phone = \"08123456789\";</pre>");
document.writeln("<pre> let genderLabel = \"Laki-laki\";</pre>");

document.writeln("<br>");
document.writeln("You see if u use let in javascript, let is a container to store data, you can use var, let, or const to declare a variable." + "<br>");
document.writeln("<br>");

// variable declaration
let fullName = "Sherlock Holmes";
let age = 40;
let job = "Detektif";
let address = "221B Baker Street, London";  
let phone = "08123456789";
let genderLabel = "Laki-laki";

// Displaying letiable values
document.writeln("Nama: " + fullName + "<br>");
document.writeln("Umur: " + age + " Tahun<br>");
document.writeln("Pekerjaan: " + job + "<br>");
document.writeln("Alamat: " + address + "<br>");
document.writeln("Telepon: " + phone + "<br>");
document.writeln("Jenis Kelamin: " + genderLabel + "<br>");
document.writeln("<br>");



// Example of letiable declaration with let
document.writeln("<h3>Example of let declaration with let</h3>");
let room = "A205";
let studentCount = 30;
let course = "JavaScript Basics";

document.writeln("Ruangan: " + room + "<br>");
document.writeln("Jumlah Siswa: " + studentCount + "<br>");
document.writeln("Mata Kuliah: " + course + "<br>");
document.writeln("<br>");
document.writeln("Ruangan: " + room + "<br>");
document.writeln("Jumlah Siswa: " + studentCount + "<br>");
document.writeln("Mata Kuliah: " + course + "<br>");
document.writeln("<br>");

course = "PHP Basics"; //u can change the value of a let declared with let  

// Displaying letiable values

document.writeln("Ruangan: " + room + "<br>");
document.writeln("Jumlah Siswa: " + studentCount + "<br>");
document.writeln("Mata Kuliah: " + course + "<br>");
document.writeln("<br>");
document.writeln("Ruangan: " + room + "<br>");
document.writeln("Jumlah Siswa: " + studentCount + "<br>");
document.writeln("Mata Kuliah: " + course + "<br>");


// Example of letiable declaration with const
document.writeln("<h3>Example of const declaration with const</h3>");
const brandName = "TechGenius";
const product = "Smartphone";
const price = 999.99;

// if u use const, u can't change the value of a const declared with const
document.writeln("<p>if u use const, u can't change the value of a const declared with const</p>")

// example of const declaration
document.writeln("Nama Merek: " + brandName + "<br>");
document.writeln("Produk: " + product + "<br>");
document.writeln("Harga: $" + price.toFixed(2) + "<br>");
document.writeln("<br>");

// if i try to change the value of a const declared with const, it will throw an error
try {
    brandName = "TechMaster"; // This will throw an error
    product = "Tablet"; // This will also throw an error
    price = 799.99; // This will also throw an error
} catch (error) {
    document.writeln("<p>Error: " + error.message + "</p>");
}

document.writeln("Nama Merek: " + brandName + "<br>");
document.writeln("Produk: " + product + "<br>");
document.writeln("Harga: $" + price.toFixed(2) + "<br>");


// overall, u just need to remember that: i will recommend using let
// - let is used to declare a variable that can be changed later. 
// - const is used to declare a variable that cannot be changed later.
