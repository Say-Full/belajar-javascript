const angka = [10, -3, -9, 0, 6, 2, 7, -10];



// Array.filter

// Callback
// const angkaBaru = angka.filter(function (a) {
//     return a >= 0;
// });

// Arrow Function
// const angkaBaru = angka.filter( a => a >= 0 );



// Array.map

// const angkaBaru = angka.map( a => a * 2 );



// Array.reduce

// const angkaBaru = angka.reduce((accumulator, currentValue) => accumulator + currentValue);



// Method Chaining

// Cari angka > 5, kalikan angka trsbt dgn 3, dan jumlahkan semua angkanya
const angkaBaru = angka.filter(a => a > 0).map(a => a * 3).reduce((acc, cur) => acc + cur);
console.log(angkaBaru);