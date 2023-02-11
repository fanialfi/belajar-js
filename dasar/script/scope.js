/* merupakan area scope data
 * ada dua jenis scope, yaitu scope lokal, dan global
 * scope lokal bisa memanggil data yang berada didalam global scope
 * sedangkan global scope tidak bisa memanggil data yang berada didalam lokal scope */

// global scope
let counter = 0;

function hittMe() {
  // local scope hittMe
  console.log("lokal scope hittMe");
  counter = 10; // variabel global scope di global scope bisa di modif di local scope
  console.log(counter);
  const localScopeHitMe = 100;
}
function other() {
  // local scope other
  console.log("lokal scope other");
  console.log(counter);

  // console.log(localScopeHitMe); // antar local scope tidak bisa saling mengakses
}

hittMe();
other();
console.log(`hasil counter : ${counter} di global scope`);

// nested function scope
function first() {
  let firstVariable = "first";

  function second() {
    console.log(firstVariable);
    const secondVariable = "Second";
  }

  second();
  console.log(secondVariable); // tidak bisa mengakses, karena sudah beda scope
}
first();
