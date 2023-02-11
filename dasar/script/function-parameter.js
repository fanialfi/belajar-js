/* untuk mengirimkan informasi ke function yang ingin di panggil,
 * kita pelu menambahkan parameter atau argument di functtion yang sudah dibuat
 * parameter ditempatkan didalam kurung () di deklarasi method
 * parameter bisa lebih dari satu, jika lebih dari satu parameter, harus dipidahkan dengan tanda koma */

function sayHello(firstName, lastName) {
  console.log(`Hello ${firstName} ${lastName}`);
}

const depan = "Fani";
const belakang = "ALfirdaus";
sayHello(depan, belakang);

sayHello("Fani", "Alfirdaus");
