/* chaining operator (?) merupakan operator untuk mengamankan ketika kita ingin mengakses properti sebuah object dari data nullish
 * jika kita mencoba mengakses properti dari sebuah object dari data nullish tanpa mengeluarkan optional chaining operator,
 * maka akan terjadi error */

// error mengakses properti nullish
// let person = {};
// console.log(person.address.country);

// dengan optional chaining
let person = {};
let country = person?.address?.country;
console.log(country);
