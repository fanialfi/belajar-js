/* break digunakan untuk menghentikan seluruh perulangan
 * sedangkan continue digunakan untuk menghentikan perulangan saat ini,
 * lalu melanjutkan ke perulangan selanjutnya */

let counter = 1;
while (true) {
  console.log(`perulangan ke ${counter}`);
  counter++;
  if (counter >= 10) {
    break;
  }
}

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`perulangan ganjil ke ${i}`);
}
