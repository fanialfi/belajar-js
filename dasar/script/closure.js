/* merupakan kombinasi function dan bundle referensi ke data sekitarnya
 * dengan kemampuan closure, kita bisa membuat sebuah function di local scope dan referensi ke data di sekitar local scope tersebut
 * keluar dari scope nya */

function createAdderr(value) {
  const owner = "fani";
  function add(params) {
    console.log(owner);
    return value + params;
  }
  return add;
}
const addTwo = createAdderr(10);
console.log(addTwo(10));
console.log(addTwo(20));
// function addTwo(params){
//   console.log("fani")
//   return 10 + params
// }
