// operator yang bisa kita gunakan untuk melihat tipe data dari sebuah value atau variable
// karena JS merupakan dynamic language, jadi kadang kita perlu mengecek tipe data sebuah value atau variable menggunakan operator typeof
// hasil dari operator typeof adalah string tipe datanya

/* undefined => undefined
 * null => object
 * boolean => boolean
 * number => number
 * BigInt => bigInt
 * string => string
 * symbol => symbol
 * function => function
 * lainnya => object
 */

let data = 10;
if (typeof data === "number") {
  console.log(typeof data);
} else if (typeof data === "string") {
  console.log(typeof data);
} else if (typeof data === undefined) {
  console.log(typeof data);
} else if (typeof data === "boolean") {
  console.log(typeof data);
} else {
  console.log(typeof data);
}
