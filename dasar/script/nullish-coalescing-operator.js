/* nillish value adalah null dan undefined
 * nullist coaleshing operator (??) adalah operator mirip dengan ternary operator,
 * yang membedakan adalah pada kondisi, jika bernilai null atau undefined, baru default value nya diambil */

// tanpa nullish coaleshing
// let parameter;
// let data = parameter;
//
// if (data === undefined || data == null) {
//   data = "Nilai default";
// }
// console.log(data);

// dengan nullish coaleshing
let parameter;
const data = parameter ?? "Nilai default";
console.log(data);
