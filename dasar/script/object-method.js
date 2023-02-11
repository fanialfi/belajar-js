/* karena sebenarnya function juga salah satu tipe data
 * jadi function pun sebenarnya bisa ditambahkan sebagai properti di object
 * function di object kadang disebut juga dengan object method */
let person = {
  umur: 17,
  alamat: "Indonesia",
  nama: (nama) => {
    console.log(nama);
    return nama;
  },
};

person.nama("fani");
console.table(person);

// ATAU
function sayHello(nama) {
  console.log(`Hello ${nama}`);
  return nama;
}
let nama = {
  sayHello: sayHello,
};
nama.sayHello("fani");
console.table(nama);

person.sayHello = function (name) {
  console.log(`Hello ${name}`);
};
person.sayHello("fanialfi");
