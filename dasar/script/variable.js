/*
 * Variable adalah tempat untuk menyimpan data
 * Untuk membuat variabel di JS, bisa dengan menggunakan kata kunci "var" diikuti dengan nama variable-nya
 * JS adalah dynamic language, artinya variable di JS tidak terpaku harus menggunakan satu tipe data
 * variable di JS bisa diakses berkali-kali
 */

// Tanpa variable
console.log("Fani Alfirdaus");
console.log("Fani Alfirdaus");
console.log("Fani Alfirdaus");
console.log("Fani Alfirdaus");
console.log("Fani Alfirdaus");
console.log("Fani Alfirdaus");
console.log("Fani Alfirdaus");
console.log("Fani Alfirdaus");

console.log("");

// dengan variable
var fullName = "Fani Alfirdaus";
var tipeDataNumber = 100;
var tipeDataBoolean = true;
console.log(fullName);
console.log(tipeDataNumber);
console.log(tipeDataBoolean);

console.log("");

// mengubah isi variable
tipeDataBoolean = false;
tipeDataNumber = 0b1111;
console.log(tipeDataNumber);
console.log(tipeDataBoolean);

console.log("");

// menambahkan variable
var firstName = "Fani";
var lastName = "Alfirdaus";
console.log(firstName + " " + lastName);
