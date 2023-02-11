/* secara default parameter di function itu optional
 * artinya kita tidak wajib mengisi value / parameter saat memanggil function nya,
 * jika tidak diisi maka by default nya akan diisi dengan undefined */

function sayHello(firstName, middleName, lastName) {
  console.log(firstName);
  console.log(middleName);
  console.log(lastName);
}
sayHello();
sayHello("Fani");
sayHello("Fani", "Alfirdaus");
sayHello("Fani", "", "Alfirdaus");
sayHello("Fani", "", "Alfirdaus", "Kelebihan"); // parameter yang Kelebihan akan diabaikan
