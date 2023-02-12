/* fitur yang bisa digunakan untuk membongkar  values di array atau object ke dalam variabels
 * sangat memperbudahkan ketika ingin mengambil data dari array atau object tanpa harus melakukan pengambilan satu persatu */

// mengambil data satu persatu sebelum menggunakan destructuring
const names = ["fani", "alfirdaus"];
const firstName = names[0];
const lastName = names[1];
console.log(firstName);
console.log(lastName);

// destructuring array
const nama = ["Fani", "Alfirdaus", "eko", "joko", "adit"]; // kalau array menggunakan kurung siku
const [namaDepan, namaBelakang, ...other] = nama;
console.log(namaDepan, namaBelakang);
console.table(other);

// destructuring object
const person = {
  depan: "Fani",
  belakang: "Alfirdaus",
  umur: 17,
  alamat: {
    negara: "Indonesia",
    propinsi: "Jawa Tengah",
    kabupaten: "Karanganyar",
  },
};
// const { depan, belakang, umur, ...alamat } = person; // kalau di object menggunakan kurung kurawal, dan nama variabels nya harus sama dengan nama properti
// console.log(depan, belakang, umur, alamat);

// destructuring nested object
const {
  depan,
  belakang,
  umur,
  alamat: { negara, propinsi, kabupaten },
} = person;
console.log(depan);
console.log(belakang);
console.log(umur);
// console.log(alamat); // mestinya tidak bisa
console.log(negara);
console.log(propinsi);
console.log(kabupaten);

{
  // destructuring di function parameter
  function displayPerson({ firstName, lastName }) {
    console.log("destructuring di function parameter menggunakan data object");
    console.log(firstName);
    console.log(lastName);
  }
  const person = {
    firstName: "Fani",
    lastName: "Alfirdaus",
  };
  displayPerson(person);
}
{
  // destructuring di function parameter dengan array
  function displayPerson([first, second]) {
    const sum = first + second;
    console.log(sum);
  }
  displayPerson([1, 2]);
  displayPerson([10, 10]);
}
