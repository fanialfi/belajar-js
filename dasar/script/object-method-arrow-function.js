let person = {
  nama: "Fani",
  sayHello: (name) => {
    console.log(`Hello ${name}`);
    console.log(this); // window
  },
};

person.sayHello("fani");
