// percabangan
// percabangan artinya kita bisa mengeksekusi kode program tertentu ketika suatu kondisi terpenuhi
// kadang kita ingin melakukan eksekusi program tertentu jika kondisi if bernilai false
// hal ini bisa dilakukan oleh else expression
// kadang dalam if, kita butuh membuat beberapa kondisi
// kasus seperti ini kita bisa menggunakan else if

const examValue = 75;

if (examValue > 90) {
  console.log("A");
} else if (examValue > 80) {
  console.log("B");
} else if (examValue > 70) {
  console.log("C");
} else if (examValue > 60) {
  console.log("D");
} else {
  console.log("Try Again Next Year");
}
