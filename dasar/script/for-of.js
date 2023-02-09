/* digunakan untuk melakukan iterasi terhadap isi value-nya dari iterable object, seperti array string dan lain lain
 * for of tidak bisa digunakan untuk melakukan iterasi data di object */
const nama = "Fani Alfirdaus";
for (const alphabet of nama) {
  console.log(alphabet);
}

const person = ["Fani ALfirdaus", "Indoensia", 17];
for (const properti of person) {
  console.log(properti);
}
