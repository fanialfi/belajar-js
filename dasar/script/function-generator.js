/* merupakan function yang digunakan untuk men generate data generator
 * generator adalah data yang dapat diiterasi seperti array
 * untuk membuat function generator, kita perlu menggunakan tanda * (bintang) setelah kata function
 * dan untuk mengembalikan data di tiap iterasi, kita bisa menggunakan kata kunci yield lalu diikuti dengan datanya */
function* createName() {
  yield "Fani";
  yield "Alfirdaus";
}
const names = createName();
for (const nama of names) {
  console.log(nama);
}
console.log(typeof names);
console.log(names[0]); // tidak bisa diakses lewat index, hanya bisa diakses lewat iterasi

const data = [1, 2, 3, 4, 5];
console.log(data);
console.log(typeof data);

// function generator yang lebih kompleks
// lazy
function* buatGanjil(value) {
  for (let i = 0; i < value; i++) {
    if (i % 2 === 1) {
      console.log(`yield ${i}`);
      yield i;
    }
  }
}
const numbers = buatGanjil(15);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
for (const number of numbers) {
  console.log(number);
}

// generator itu sifatnya lazy
// jadi jika datanya belum diambil dari generator, maka yield selanjutnya tidak akan di eksekusi

console.log("");

// jika tidak menggunakan generator
// eager
function buatGanjilArray(value) {
  let result = [];
  for (let i = 0; i <= value; i++) {
    if (i % 2 === 1) {
      console.log(`yield tanpa generator atau eager ${i}`);
      result.push(i);
    }
  }
  return result;
}
const nomors = buatGanjilArray(15);
for (const nomor of nomors) {
  console.log(nomor);
}
