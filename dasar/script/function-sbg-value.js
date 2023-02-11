function sayHello(name) {
  console.log(`Hello ${name}`);
}
const say = sayHello; // menyimpan function sayHello didalam variabel

sayHello("Fani");
say("Alfi");
