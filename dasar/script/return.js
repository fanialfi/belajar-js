/* kita bisa menggunakan return untuk menghentikan eksekusi sebuah function,
 *  saat kita menggunakan return maka kode setelah return tidak akan di eksekusi */

function isContain(array, searchValue) {
  for (const element of array) {
    console.log(element);
    if (element == searchValue) {
      return true;
    }
  }
  return false;
}
const data = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const result = isContain(data, 1);
console.log(result);
