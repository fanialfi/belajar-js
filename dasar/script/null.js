// null merupakan representasi data kosong
// null berbeda dengan undefined, null berarti variable sudah ditambahkan value nya, hanya saja value nya null
// sedangkan undefined adalah variable belum ditambahkan value apapun

let person = null;
if (person === undefined) {
  console.log(undefined);
} else if (person === null) {
  console.log(null);
} else {
  console.log(person);
}
