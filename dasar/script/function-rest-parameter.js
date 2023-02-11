/* adalah fitur dimana kita bisa mengirim datanya sebanyak banyaknya pada satu parameter
 * dan secara otomatis akan di konversi menjadi array oleh js
 * rest parameter hanya boleh ada 1 di function
 * rest parameter hanya boleh berada di posisi paling akhir */
function sum(name, ...data) {
  let total = 0;
  for (const item of data) {
    total += item;
  }
  console.log(`total ${name} is ${total}`);
}
sum("orange", 1, 2, 3, 4, 5, 6, 7, 8, 9);
sum("banana", 3, 4, 5, [1, 2, 3]);
