/*
 * Variable adalah tempat untuk menyimpan data
 * Untuk membuat variabel di JS, bisa dengan menggunakan kata kunci "var" diikuti dengan nama variable-nya
 * JS adalah dynamic language, artinya variable di JS tidak terpaku harus menggunakan satu tipe data
 * variable di JS bisa diakses berkali-kali
 *
 * sejak tahun 2015, diperkenalkan kata kunci baru untuk membuat variable
 * let dan const
 * let untuk tipe data yang isinya bisa di ubah, sedangkan const tidak dapat di ubah
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
let fullName = "Fani Alfirdaus";
let tipeDataNumber = 100;
let tipeDataBoolean = true;
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
let firstName = "Fani";
let lastName = "Alfirdaus";
console.log(firstName + " " + lastName);

// Const
const tidakDapatDiUbah = "Jangan di ubah";
console.log(tidakDapatDiUbah);
tidakDapatDiUbah = "gak bakal bisa diubah";
console.log(tidakDapatDiUbah); // Error
