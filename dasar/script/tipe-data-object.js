/* tipe data yang mirip dengan array
 * yang membedakan index pada object bisa menggunakan string*/

// membuat object
const person = {}; // object kosong

console.table(person);
// menambah atau merubah
person["nama"] = "Fani Alfirdaus";
person["alamat"] = "Indonesia";
person["umur"] = 17;
console.table(person);

// menghapus index / attribute
delete person["umur"];
console.table(person);

// membuat object dengan properti
const orang = {
  "nama lengkap": "Fani Alfirdaus",
  alamat: "Indonesia",
  umur: 17,
};

// mengakses properti object
console.log(`nama : ${orang["nama lengkap"]}`);
console.log(`alamat : ${orang.alamat}`);
console.log(`umur : ${orang.umur}`);
