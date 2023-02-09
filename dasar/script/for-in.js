/* merupakan perulangan for yang digunakan untuk mengiterasi seluruh data properti di object atau index di array
 * walaupun for in bisa digunakan di array, namun tidak direkomendasikan untuk array,
 * karena biasanya kita jarang sekali butuh data index untuk array */

const person = {
  nama: "Fani Alfirdaus",
  alamat: "Indoensia",
  umur: 17,
};
for (const properti in person) {
  console.log(`properti ${properti} : ${person[properti]}`);
}

// for in di array => sangat tidak direkomendasikan di array
const name = ["Fani Alfirdaus", "Indoensia", 17];
for (const index in name) {
  console.log(`index ${index} : ${name[index]}`);
}
