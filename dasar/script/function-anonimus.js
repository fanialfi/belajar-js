/* juga sering disebut function tanpa nama
 * bisa juga membuat function didalam variabel
 * atau juga membuat function ketika mengisi parameter */
let nama = function (name) {
  return name;
};
console.log(nama("fani"));

// anonimus function di parameter
function giveMeName(callback) {
  callback("fani");
}

giveMeName(function (name) {
  console.log(`Hello ${name}`);
});
