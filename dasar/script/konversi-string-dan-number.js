const value1 = "1";
const value2 = 1;
const sum = value1 + value2; // 11, padahal kita inginnya hasilnya adalah 2
console.log(sum);

/*
 * parseInt(string) => dari string ke number (bilangan bulat)
 * parseFLoat(string) => dari string ke number (bilangan pecahan)
 * Number(string) => dari string ke number (bilangan bulat atau pecahan)
 * number.toString() => dari number ke string
 */
console.log("");
const value3 = parseInt(value1);
const sum2 = value2 + value3;
console.log(sum2);

console.log("");
console.log(parseInt("100.123"));
console.log(parseFloat("100.123"));
console.log(Number("123.321"));
console.log(Number("1234"));
console.log(sum2.toString());

console.log("");
// NaN
console.log(parseInt("100Hai")); // 100 => masil mentoleransi jika kesalah di belakang
console.log(parseInt("Hai100")); // NaN
console.log(parseFloat("100Hai")); // 100
console.log(parseFloat("Hai100")); // NaN
console.log(Number("100Hai")); // tidak mentoleransi kesalahan sedikitpun (NaN)

console.log("");
// operasi NaN
const data1 = Number("salah"); // NaN
const data2 = 100;
const jumplah = data1 + data2;
console.log(jumplah); // NaN

console.log("");
// cek apakah sebuah number / variabel itu NaN atau tidak
const cobaNan = Number("100");
console.log(isNaN(cobaNan)); // false
const cobaNan2 = Number("100hai");
console.log(isNaN(cobaNan2)); //true
