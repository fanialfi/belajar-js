/* di destructuring kita bisa menambahkan default value
 * jadi misal kita melakukan destructuring terhadap array, ternyata datanya tidak ada,
 * maka kita bisa menambahkan default value
 * begitu juga di object */

// default value destructuring array
const name = ["Fani", "Alfirdaus"];
const [firstName, middleName, lastName = "UNKNOWN"] = name;
console.log(firstName);
console.log(middleName);
console.log(lastName);

// default value destructuring di object
const person = {
  nama: "Fani Alfirdaus",
  alamat: "Indonesia",
};
const { nama, alamat, gender = "UNKNOWN" } = person;
console.log(nama);
console.log(alamat);
console.log(gender);

// menggunakan nama variabel lain di object
{
  const data = {
    firstName: "Fani",
    lastName: "Alfirdaus",
    address: "Indonesia",
  };
  const {
    firstName: namaDepan,
    lastName: namaBelakang,
    address: alamat,
    age: umur = "UNKNOWN",
  } = data;
  console.log(namaDepan, namaBelakang, alamat, umur);
}
