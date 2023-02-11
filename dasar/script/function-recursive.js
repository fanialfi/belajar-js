// function yang memanggil dirinya sendiri

// contoh penyelesaian vactorial dengan perulangan
function vactorial(value) {
  let result = 1;
  for (let i = 1; i <= value; i++) {
    result *= i;
  }
  return result;
}
console.log(vactorial(5));
console.log(1 * 2 * 3 * 4 * 5);

// contoh penyelesaian vactorial dengan recursive

function vactorialRecurive(value) {
  if (value === 1) {
    return 1;
  } else {
    return value * vactorialRecurive(value - 1);
  }
}
console.log(vactorialRecurive(5));
