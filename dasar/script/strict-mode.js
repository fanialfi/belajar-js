/* saat menjalankan kode program JS, by default kode program nya akan berjalan dalam mode tidak strict A.K.A sloopy mode
 * pada ECMAScript5, diperkenalkan mode strict, dimana ketika mode dijalankan maka akan merubah beberapa cara kerja di JS seperti:
 * merubah beberapa kesalahan JS error dari yang tadinya silent error, menjadi throw error (terlihat)
 * memperbaiki kesalahan engine JS untuk optimasi
 * menolak beberapa kode program yang kedepannya tidak akan digunakan di ECMAScript versi selanjutnya
 * untuk menjalankan strict mode, kita bisa menggunakan `use strict` pada baris awal file JS
 * atau bisa juga di awal function kita */

function useStrict() {
  "use strict";
  const person = {
    nama: "Fani ALfirdaus",
    alamat: "Indonesia",
  };
  with (person) {
    console.log(nama);
  }
}
useStrict();
