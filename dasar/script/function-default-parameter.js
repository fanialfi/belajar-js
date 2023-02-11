/* parameter di function bisa kita beri default parameter
 * jika kita tidak mengisi parameter maka akan diisi default value
 * atau jika kita mengirimkan parameter yang value nya undefined, maka akan diisi oleh default */

function register(nama, gender = "UNKNOWN") {
  return [nama, gender];
}

console.log(register("fani", "laki - laki"));
console.log(register("alfi")); // maka parameter yang kedua akan diisi default
console.log(register("alfi", undefined)); // maka parameter yang kedua akan diisi default
console.log(register("fani", null));
