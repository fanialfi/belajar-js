// Untuk menggunakan string template gunakan backtic (``)
// lalu untuk memasukkan data gunakan ${data-nya}
const nama = "Fani Alfirdaus";
const kegiatan = "Belajar JS dasar";

// Sebelum menggunakan string template
console.log(
  "Hallo nama saya adalah " + nama + "\n" + "kali ini saya sedang " + kegiatan
);

console.log("");

// Dengan menggunakan String template
console.log(`Hallo nama saya adalah ${nama}\nkali ini saya sedang ${kegiatan}`);
