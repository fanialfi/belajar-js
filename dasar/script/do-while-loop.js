/* perulangan yang mirip dengan while
 * perbedaannya hanya pada pengecekan kondisi
 * pengecekan kondisi di while loop dilakukan di awal sebelum perulangan di lakukan,
 * sedangkan di do while loop dilakukan setelah perulangan dilakukan
 * minimal pasti sekali perulangan akan di lakukan walaupun kondisi bernilai false */

let data = 0;
let country = 0;
do {
  console.log(`perulangan do while loop ke ${country}`);
  country++;
} while (country <= data);
