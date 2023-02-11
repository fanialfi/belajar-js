/* alternatif pembuatan function yang lebih sederhana dari function biasanya
 * terdapat limitasi dan juga tidak bisa digunakan di semua situasi
 * tidak memiliki fitur arguments object
 * tidak bisa menggunakan function generator
 * tidak bisa mengakses this
 * tidak bisa berdisi sendiri dengan tiba tiba
 * tidak bisa mengakses super */

// arrow function di variabel
const sayHello = (nama) => {
  const say = `Hello ${nama}`;
  console.log(say);
};
sayHello("fani");
// arrow function tanpa block {}
/* jika arrow function isinya sederhana, misal hanya satu baris
 * kita bisa menggunakan arrow function tanpa block {} */

const panggilHello = (nama) => console.log(`Hello ${nama}`);
panggilHello("alfi");

// arrow function return value
// jika menggunakan block {}, maka perlu menggunakan kata kunci return
// jika tidak menggunakan block {}, maka tidak perlu menggunakan kata kunci return

const sum = (first, second) => first + second; // satu baris tanpa menggunakan kata kunci return
console.log(sum(10, 10));

// arrow function tanpa kurung parameter ()
// jika parameter nya hanya satu, maka tanda kurung (), bisa dihilangkan , tapi kalau parameter lebih dari satu maka harus menggunakan ()
// jika tidak ada parameter harus menggunakan tanda kurung ()
const nama = (name) => console.log(`hai ${name}`);
nama("faniiii");

// arrow function sebagai parameter
function giveMeName(callback) {
  callback("fani");
}
giveMeName((nama) => {
  console.log(`Hello ${nama}`);
});
