/* didalam function kita bisa menggunakan function lagi
 * kita hanya bisa memanggil inner function didalam function yang didalammnya
 * jika memanggil inner function diluar outer function maka tidak bisa */

function outer() {
  function inner() {
    console.log("INNER");
  }
  inner();
  inner();
}
outer();
inner(); // tidak bisa
