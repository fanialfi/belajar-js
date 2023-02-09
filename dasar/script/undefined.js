// merupakan sebuah tipe data
// sebuah variabel yang belum ditambahkan nilai, maka variabel tersebut merupakan tipe undefined

let tes;
if (tes === undefined) {
  console.log(`isinya adalah ${undefined}`);
} else if (tes !== undefined) {
  console.log(`isinya adalah ${tes}`);
}

let defineUndefine = undefined;
if (defineUndefine === undefined) {
  console.log(undefined);
} else if (defineUndefine !== undefined) {
  console.log(`isinya adalah ${defineUndefine}`);
}

// undefined array
const preson = ["Fani", "Alfirdaus"];
if (preson[2] === undefined) {
  console.log(undefined);
} else if (preson[2] !== undefined) {
  console.log("defined");
}

// undefined object
const person = {};
if (person.nama === undefined) {
  console.log(undefined);
} else if (person.nama !== undefined) {
  console.log("defined");
}
