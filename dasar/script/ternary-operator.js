/* adalah operator sederhana dari if statement
 * terdiri dari kondisi yang di evaluasi, jika hasilnya true maka nilai pertama di ambil,
 * jika false maka nilai ke dua di ambil*/

const nilai = 75;
let ucapan;

// sebelum menggunakan ternary operator
// if (nilai >= 75) {
//   ucapan = "Selamat anda lulus";
// } else {
//   ucapan = "Silahkan coba lagi";
// }

// setelah menggunakan ternary operator
ucapan = nilai >= 75 ? "Selamat anda lulus" : "Silahkan coba lagi";
console.log(ucapan);
