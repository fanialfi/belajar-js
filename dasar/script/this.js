/* this adalah referensi ke object milik siapa
 * tiap lokasi kata kunci this, bisa berbeda beda referensi pemiliknya
 * didalam object method, this merupakan referensi ke object pemiliknya function nya
 * didalam global scope, this merupakan referensi ke global object (di browser biasanya window)
 * didalam function, this merupakan referensi ke global object (di browser biasanya window)
 * di function dengan strict mode, this adalah undefined
 * didalam event, this merupakan referensi ke element yang menerima event */

// this di global scope
console.log(this);
// this di function
function sayHello(name) {
  console.log(this); // window

  // this di nested function
  function inner() {
    console.log(this); // window
  }
  inner();
}
sayHello("fanialfi");

// this di object method
let person = {
  name: "fani",
  alamat: "Indonesia",
  sayHello: function () {
    console.log(this.name);
  },
};
person.sayHello();
