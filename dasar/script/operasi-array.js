let names = [];
console.table(names);

// menambah array
console.log("");
names.push("Fani");
console.table(names);

console.log("");
names.push("Dian", "Eko");
console.table(names);

console.log("");
names.push("Joko", "Rudi");
console.table(names);

// mendapatkan panjang array
console.log("");
console.log(names.length);

// mendapatkan data di posisi index
console.log("");
console.log(names[1]); // Dian

// mengubah data di posisi index
console.log("");
names[0] = "Alfi";
console.log(names);

// menghapus array, namun index tidak bergeser
delete names[2];
console.table(names);
console.log(names.length);
console.log(names[2] == undefined);
names.push("Fani lagi");
console.table(names);
