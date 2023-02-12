/* getter dan setter adalah kemampuan membuat function yang berbeda
 * untuk mengambil data (getter) dan mengubah data (setter) pada sebuah properti di object
 * dengan menggunakan getter dan setter, kita bisa melakukan hal apapun dalam function sebelum
 * sebuah properti di akses atau diubah, misalnya menambah validasi dll */

// sebelum menggunakan getter dan setter
const person = {
  firstName: "Fani",
  lastName: "Alfirdaus",
  fullName: "Fani Alfirdaus",
};
person.firstName = "budi";
person.fullName = person.firstName + " " + person.lastName;

// dengan menggunakan getter dan setter
const nama = {
  firstName: "fani",
  lastName: "alfirdaus",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const arry = value.split(" ");
    this.firstName = arry[0];
    this.lastName = arry[1];
  },
};
console.log(nama);
nama.fullName = "Fani Alfirdaus";
console.log(nama);
nama.fullName = "Budi Nugraha";
console.log(nama);
nama.fullName = "Joko Santoso";
console.log(nama);
