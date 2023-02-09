// switch adalah statement percabangan yang sama dengan if, namun lebih sederhana cara pembuatannya
// kondisi di switch statement hanya untuk perbandingan ==

const nilai = "E";
switch (nilai) {
  case "A":
    console.log("Anda Lulus dengan baik");
    break;
  case "B":
  case "C":
    console.log("Anda Lulus");
    break;
  case "D":
    console.log("Anda tidak lulus");
    break;
  default:
    console.log("Mungkin anda salah Jurusan");
    break;
}
