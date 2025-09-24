function tambahMundur(n) {
  if (n === 0) return 0;
  return n + tambahMundur(n - 1);
}

console.log(tambahMundur(3));
//kalo gw breakdown kayanya gini
// 3 + tambahMundur(2)
// 3 + 2 + tambahMundur(1)
// 3 + 2 + 1 + tambahMundur(0)
// 3 + 2 + 1 + 0
// hasilnya 6

function kaliMundur(n) {
  if (n === 1) return 1; // base case
  return n * kaliMundur(n - 1);
}

console.log(kaliMundur(4));

// 4 * kaliMundur(3)
// 4 * 3 * kaliMundur(2)
// 4 * 3 * 2 * kaliMundur(1)
// 4 * 3 * 2 * 1
// hasilnya 24

function hitungHuruf(str) {
  if (str === "") return 0; // base case: string kosong
  return 1 + hitungHuruf(str.slice(1));
}

console.log(hitungHuruf("halo"));

// 1 + hitungHuruf("alo")
// 1 + 1 + hitungHuruf("lo")
// 1 + 1 + 1 + hitungHuruf("o")
// 1 + 1 + 1 + 1 + hitungHuruf("")
// 1 + 1 + 1 + 1 + 0
// hasilnya 4

function jumlahArray(arr) {
  if (arr.length === 0) return 0; // base case: array kosong
  return arr[0] + jumlahArray(arr.slice(1));
}

console.log(jumlahArray([1, 2, 3, 4]));

// 1 + jumlahArray[2,3,4]
// 1 + 2 + jumlahArray[3,4]
// 1 + 2 + 3 + jumlahArray[4]
// 1 + 2 + 3 + 4 + jumlahArray[]
// 1 + 2 + 3 + 4 + 0
// hasilnya 10

function jumlahNested(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // kalau elemen adalah array → rekursif lagi
      total += jumlahNested(arr[i]);
    } else {
      // kalau elemen angka biasa → langsung tambahin
      total += arr[i];
    }
  }

  return total;
}

console.log(jumlahNested([1, [2, 3], [4, [5]]])); // 15

// disini gw nangkepnya array punya 3 index
// index 0 = 1
// index 1 = [2, 3] > index 0 = 2, index 1 = 3
// index 2 = [4, [5]] > index 0 = 4, index 1 = [5] > index 0 = 5

// gw breakdown
// 1 + jumlahNested([2, 3])
// 1 + jumlahNested(5)
// 1 + 5 + jumlahNested([4[5]])
// 1 + 5 + jumlahNested(4[5])
// 1 + 5 + jumlahNested(4, 5)
// 1 + 5 + 4 + 5
// 15

function countUp(n) {
  if (n === 1) {
    return 1;
  }
  return countUp(n - 1) + " > " + n;
}

console.log(countUp(10));

// latihan sum
function sum(n) {
  if (n === 1) {
    return 1;
  }
  return sum(n - 1) + n;
}

console.log(sum(10));

// latihan string
function stringBalik(str) {
  if (str.length === 1) {
    return str;
  }
  return str.slice(str.length - 1) + stringBalik(str.slice(0, str.length - 1));
}

console.log(stringBalik("aniger"));

// latihan max array
function maxArray(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  if (arr[0] > arr[1]) {
    arr.splice(1, 1);
  } else {
    arr.shift();
  }
  return maxArray(arr);
}

console.log(maxArray([1, 4, 2, 7, 6, 9, 7, 10]));

// latihan function generator angka 1 - 5
console.log("ini latihan function generator");

function* buatAngka() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const angka = buatAngka();
for (const value of angka) {
  console.log(value);
}

// menggunakan loop for
console.log("ini latihan function generator dengan for loop");
function* loopBuatAngka(angka) {
  for (let i = 1; i <= angka; i++) {
    yield i;
  }
}

const angkaLoop = loopBuatAngka(10);
for (const value of angkaLoop) {
  console.log(value);
}
