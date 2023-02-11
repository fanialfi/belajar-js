/* by default function tidak mengembalikan value,
 * agar bisa mengembalikan value, kita bisa menggunakan kata kunci "return" didalam function nya
 * untuk menghasilkan nilai tersebut kita harus menggunakan kata kunci return lalu diikuti data yang mau dihasilkan
 * hanya bisa mengembailkan 1 data, bila lebih dari 1 bisa membungkus data tersebut menjadi array */

// membuat function dengan parameter dan return value
function sayHello(firstName, lastName) {
  const say = `Hello ${firstName} ${lastName}`;
  return say;
}
const hasil = sayHello("Fani", "Alfirdaus");
sayHello("Budi", "Nugraha"); // value dari return-nya harus ditangkap
console.log(sayHello("Fani", "Alfirdaus"));

// function dengan dua return
function sayHello(firstName, lastName) {
  const say = `Hello ${firstName} ${lastName}`;
  return say;
  return true;
}
const result = sayHello("Fani", "Alfirdaus");
console.log(result); // return true nya menjadi tidak di tangkap

// return value yang berbeda beda
function getFinnalyScore(value) {
  if (value > 90) {
    return "A";
  } else if (value > 80) {
    return "B";
  } else if (value > 70) {
    return "C";
  } else if (value > 60) {
    return "D";
  } else {
    return "GAGAL";
  }
}
console.log(getFinnalyScore(70));
