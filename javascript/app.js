// Variabel pada javascript

let nama = "Fahmi";
nama = "Nuradi";
console.log(nama);

const harlah = "Rabu";
console.log(harlah);
console.log("saya belajar js");

// tipe data.
// string => mewakili teks
let myName = "Fahmi Nuradi";
let asal = "Jakarta barat";
let saya = `Hallo nama saya ${myName}, saya berasal dari ${asal}`; //template literal

console.log(saya);

// number
let angka = 90;
let angkaDec = 0.5;
let minus = -100;
const no_sepatu = 100;
console.log(angka);

// Boolean
let makan = false;
console.log(makan);

// undifined
let result;
result = 1 + 1;
console.log(result);
let kosong = null;
console.log(kosong + false);

// tipe data non primitif

// object
let mobil = {
  merek: "Toyoya Alphard",
  warna: "Hitam",
  nopol: "B 1234 BBB",
  kapasitas: 10,
  lunas: true,
  pemilik: {
    nama: "Asep",
    asal: "Kemanggisan",
    umur: 39,
  },
};

// dot anotation (.)
console.log(mobil.merek);
console.log(mobil.pemilik.nama);
// bracket
console.log(mobil["kapasitas"]);

let myCar = `Hallo nama saya ${mobil.pemilik.nama}`;

// hallo nama saya asep, saya berumur 39 tahun dan saya memiliki mobil toyota alphard dengan warna hitam dan nomor polisi B 1234 BBB.

let buah = ["Apel", "Jeruk", "Anggur", "Durian"];
console.log(buah);

buah.push("Rambutan"); //menambah data buah pada index terakhir.
console.log(buah);

buah.unshift("Alpukat"); // menambah data buah pada index pertama.
console.log(buah);

buah.shift(); //menghapus data index pertama
console.log(buah);

buah.pop(); //menghapus data buah pada index terakhir
console.log(buah);

buah.push("Rambutan"); //menambah data buah pada index terakhir.
buah.push("Leci"); //menambah data buah pada index terakhir.
buah.push("Dukuh"); //menambah data buah pada index terakhir.
console.log(buah);

console.log(buah.length); //melihat jumlah indeks yang ada pada array

// menampilkan semua data buah
for (i = 0; i < buah.length; i++) {
  console.log(`Saya punya buah ${buah[i]}`);
}

// Operator
// Operator Aritmatik

let angka1 = 10;
let angka2 = 30;
let angka3 = 20;

console.log(angka1 + angka2);
console.log(angka1 - angka2);
console.log(angka3 * angka2);
console.log(angka2 / angka3);
console.log(angka2 % angka3);
console.log(angka1++); //looping
console.log(angka1--); //looping
console.log(angka1 ** 3);

// operator penugasan
let a = 10;
a += 100; //110
console.log(a);

a -= 20; //90
console.log(a);

a *= 5; //450
console.log(a);

// operator perbandingan

let kondisi_a = "10"; //10 string
let kondisi_b = 10; //10 number
let kondisi_c = 100;

console.log(kondisi_a === kondisi_b); //false
console.log(kondisi_a !== kondisi_b); //true
console.log(kondisi_a < kondisi_c); //true

// and (&&)
let gajian = true;
let libur = false;
let hiling = true;
console.log(libur && hiling);

// or (||)
console.log(gajian || true); //true

console.log(!gajian && libur); //false
console.log(!gajian || libur); //false

// ternerary
let x = 15;
ktp = x >= 18 ? "Bisa bikin KTP" : "Belum bisa bikiin ktp";
console.log(ktp);

// konversi
console.log(typeof x);
console.log(x + 30);

// x = String(x)
console.log(typeof String(x));
console.log(typeof x);
console.log(x + 30);

// kondisi
// kondisi dengan if-else statement
let suhu = 30;

if (suhu >= 30) {
  console.log("Suhu terlalu panas");
} else if (suhu > 22) {
  console.log("Suhu normal dan nyaman");
} else {
  console.log("Suhu terlalu dingin");
}

// chalenges kondisi
// predikat a = 85 - 100
// predikat b = 76 - 85
// predikat c = 65 - 75
// predikat d = 30 - 64
// error = jika input < 30 dan >100 (input yang anda masukan salah.)

let nilai = 100;

if (nilai < 30 || nilai > 100) {
  console.log("Masukan nilai 30 - 100.");
} else if (nilai >= 85) {
  console.log(`Nilai anda adalah ${nilai}, predikat anda A`);
} else if (nilai >= 76) {
  console.log(`Nilai anda adalah ${nilai}, predikat anda B`);
} else if (nilai >= 65) {
  console.log(`Nilai anda adalah ${nilai}, predikat anda C`);
} else if (nilai >= 30) {
  console.log(`Nilai anda adalah ${nilai}, predikat anda D`);
} else {
  console.log("Input anda salah.");
}

// kondisi dengan switch statement

let day = "RABU";
let aktifitas;

switch (day.toLowerCase()) {
  case "senin":
    aktifitas = "weekly Briefing";
    break;
  case "selasa":
  case "rabu":
    aktifitas = "Doing tasks";
    break;
  case "kamis":
    aktifitas = "evaluasi";
    break;
  case "jumat":
    aktifitas = "weekly report";
    break;
  case "sabtu":
  case "minggu":
    aktifitas = "Holiday, Happy Hiling!";
    break;
  default:
    aktifitas = "Input yang anda masukan salah";
    break;
}
console.log(
  `Hari ini adalah ${day.toUpperCase()}, Aktifitas anda adalah ${aktifitas}`
);

// Looping
// for loop
for (let i = 1; i <= 10; i++) {
  console.log("saya sedang mengulang", i);
}

for (let i = 10; i > 0; i--) {
  console.log("Hitung Mundur -", i);
}

let Buah = ["Apel", "Jeruk", "Anggur", "Durian", "Rambutan", "Alpukat"];
Buah.push("Leci");
Buah.push("Lemon");

console.log(Buah.length);

for (let i = 0; i < Buah.length; i++) {
  console.log(`Saya memiliki buah yaitu : ${Buah[i]}`);
}

// menampilakan buah tapi terbalik,
for (let i = Buah.length - 1; i >= 0; i--) {
  console.log(`Saya memiliki buah yaitu : ${Buah[i]}`);
}
// for(let i = 0; i <= 3; i++){
//     prompt('Masukan input');
// }

//  for dengan in

let count = 0;
while (count <= 3) {
  console.log("Perhitungan ke - " + count);
  count++; //berhenti di angka 0 agar tidak terjadi infinite loop
}

// let username;
// while ( username !== "fahmi" ){
//     // nilai true adalah bukan fahmi,
//     //jadi kalau memasukan username selain fahmi akan terus terusan di ulang.
//     // username = prompt('Masukan username anda ..');
// }
// console.log('Username sudah sesuai');

// perulangan modern dengan in dan of
// for in digunakan untuk jenis object
for (const car in mobil) {
  console.log(`${car} : ${mobil[car]} `);
}

//for of
for (const fruit of Buah) {
  console.log(fruit);
}

let b = "Fahmi";
let c = "Nuradi";
let nami = `Nama depan : ${b}, Nama belakang ${c}`;

console.log(nami);

// function
// function biasa (umum)
function hello(waktu, nama) {
  // kode
  console.log(`Halo, selamat ${waktu}, Mr/Mrs. ${nama}`);
}

// pemanggilan dari function itu membutuhkan argumen.
hello("pagi", "asep");

// function experssion
let jumlahkan = function (bil1, bil2) {
  // kode
  return bil1 + bil2;
};

let hasil = jumlahkan(10, 40);
console.log(`Hasil dari perhitunganya adalah = ${hasil}`);

// function arrow
const persegiPanjang = (panjang, lebar) => panjang * lebar;
console.log("Luas Persegi Panjang adalah : " + persegiPanjang(10, 20));

// 1. deklarasikan variabel dengan nama = persegi.
// 2. pada variabel persegi isinya adalah arrow function,
const persegi = (sisi) => sisi * sisi;
console.log("Luas Persegi adalah : " + persegi(10));

const cetakPesan = (pesan, kelas) => {
  const say = `${pesan} untuk mengikuti kelas ${kelas}`;
  // jika tidak dikembalikan nilainya dengan return, maka say berisi undifend
  return say;
};
console.log(cetakPesan("Selamat Datang", "CCNA"));

// simple study case kalkulator sederhana

function show() {
  let input1 = prompt("masukan angka pertama");
  let input2 = prompt("masukan angka kedua");

  if (isNaN(input1) || isNaN(input2)) {
    alert("Masukan berupa angka");
  }

  let operator = prompt("masukan operator (+, -, /, *)");

  let result;

  switch (operator) {
    case "+":
      result = penjumlahan(Number(input1), Number(input2)); //input 1 => let input 1 (dari prompt)
      break;
    case "-":
      result = pengurangan(Number(input1), Number(input2));
      break;
    case "*":
      result = perkalian(Number(input1), Number(input2));
      break;
    case "/":
      result = pembagian(Number(input1), Number(input2));
      break;
    default:
        result = "Input Error"
  }
  alert(`Hasil dari ${input1} ${operator} ${input2} adalah ${result}`)
}

// function untuk operator
const penjumlahan = (bilangan1, bilangan2) => bilangan1 + bilangan2

const pengurangan = (bilangan1, bilangan2) => bilangan1 - bilangan2

// function expression
const perkalian = function(bilangan1, bilangan2) {
  return bilangan1 * bilangan2;
}
const pembagian = function(bilangan1, bilangan2) {
  return bilangan1 / bilangan2;
}

