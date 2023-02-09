/* in operator adalah operator yang bisa dilakukan untuk mengecek apakah sebuah properti ada didalam object atau tidak
 * jika properti tersebut ada di object, maka hasilnya true, jika tidak hasilnya false
 * tidak hanya di object, in juga bisa digunakan untuk mengecek index di array*/

const person = {
  firstName: "Fani",
  lastName: "Alfirdaus",
};
if ("firstName" in person) {
  console.log(`Hello ${person.firstName}`);
} else {
  console.log("hello");
}

/* in operator hanya akan mengecek apakah sebuah properti atau index ada atau tidak
 * jadi, walaupun nilai properti atau index nya undefined atau null, maka tetap akan dianggap ada*/

const student = {
  firstName: "Fani",
  middleName: undefined,
  lastName: "Alfirdaus",
};
if ("middleName" in student) {
  console.log(`Hello ${student.middleName}`);
} else {
  console.log("Hello");
}

const names = [null, "Fani", "Alfi"];
const result = 0 in names;
console.log(result);

// in operator hanya mengecek isi properti atau index, jadi tidak mengecek value nya apa
