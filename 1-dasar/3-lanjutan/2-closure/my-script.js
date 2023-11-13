// ~ Execution Context

// 1. Creation Phase

// console.log(nama); // reference error



// console.log(nama);
// var nama = 'Saiful'; // undefined



// JS akan melakukan hoisting terlebih dahulu, yaitu cek variabel dan function yg ada. Klo ada variabel, simpan ke dlm memori dgn isinya undefined. Klo ada function, simpan ke dlm memori dgn isinya kode program fungsi itu sendiri. Lalu, definisikan objek window sbg objek global dan this sbg window.





// 2. Execution Phase

// Jalankan programnya baris per baris dr atas ke bawah, termasuk jalankan console.log(); dan var nama = 'Saiful';
// Sekarang baru diisi variabel yg ada dgn nilai yg diberikan (inisialisasi).

// console.log(sayHello); // Akan dicetak kode fungsinya
// console.log(sayHello()); // 'Hai undefined'
// var nama = 'Saiful';
// console.log(sayHello()); // 'Hai Saiful'

// function sayHello() {
//     console.log(`Hai ${nama}`); // 'undefined' krn sebuah fungsi seharusnya mengembalikan nilai. Oleh krn itu, sebaiknya ganti baris ini menjadi `return Hai ${nama};`
// }





// Klo ketemu function, maka lakukan Local Execution Context yg tahapnya sama. Tp klo di Local Execution Context, kita bs akses `window` dan `arguments`.

// var nama = 'Saiful';

// function sayHello(nama) {
//     var sapa = 'Hai ';

//     return sapa + nama;
// }

// console.log(sayHello(nama)); // 'Hai Saiful'



// var nama = 'Saiful';

// function sayHello(nama) {
//     var sapa = 'Hai ';

//     return sapa + nama;
// }

// console.log(sayHello('Sani')); // 'Hai Sani'



// var nama = 'Saiful';

// function sayHello() {
//     var sapa = 'Hai ';
//     console.log(arguments[0]); // 'Sani'

//     return sapa + nama;
// }

// console.log(sayHello('Sani')); // 'Hai Saiful'





// Execution Stack

// function a() {
//     console.log('Ini A');

//     function b() {
//         console.log('Ini B');

//         function c() {
//             console.log('Ini C');
//         }

//         c();
//     }

//     b();
// }

// a();





// Closure

// function init() {
//     let nama = 'Saiful'; // Local variable

//     function tampilNama() { // Inner function (closure) krn fungsi ini membutuhkan variabel di parent scope-nya
//         console.log(nama); // Akses ke parent variable
//     }

//     tampilNama(); // Menyetak 'Saiful' di layar

//     console.dir(tampilNama); // Cek apakah fungsi ini closure atw bkn di dlm objek `tampilNama()` di dlm `[[Scopes]]` di indeks 0
// }

// init();





// function init() {
//     let nama = 'Saiful';

//     function tampilNama() {
//         console.log(nama);
//     }

//     return tampilNama;
// }

// init(); // Tdk mencetak apapun

// let panggilNama = init(); // Function Factory
// panggilNama(); // 'Saiful'





// function init() {
//     function tampilNama(nama) {
//         console.log(nama);
//     }

//     return tampilNama;
// }

// let panggilNama = init();
// panggilNama('Sani'); // Menyetak 'Sani'



// Lbh ringkas:

// function init() {
//     return function(nama) {
//         console.log(nama);
//     }
// }

// let panggilNama = init();
// panggilNama('Sani');





// Function Factories

// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Halo ${nama}, selamat ${waktu} !!!`);
//     }
// }

// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('siang');
// let selamatMalam = ucapkanSalam('malam');

// selamatPagi('Saiful'); // 'Halo Saiful, selamat pagi !!!'
// console.dir(selamatMalam('Sani')); // 'Hai Sani, selamat malam !!!' dan undefined





// Private Method

// let counter = 0;

// let add = function() {
//     return ++counter;
// }

// console.log(add()); // 1
// console.log(add()); // 2



// let counter = 0;

// let add = function() {
//     return ++counter;
// }

// counter = 10;
// console.log(add()); // 11
// console.log(add()); // 12



// let add = function() {
//     let counter = 0;
//     return ++counter;
// }

// counter = 99;
// console.log(add()); // 1
// console.log(add()); // 1

// Tujuan agar variabel counter itu tdk terganggu itu tercapai tp malah selalu diatur nilainya menjadi 0.



// let add = function() {
//     let counter = 0;

//     return function() { // Kita pkk closure supaya yg dikembalikan adlh fungsi, bkn nilai counter. Variabel counter akan mengacu ke nilai counter sblmnya
//         return ++counter;
//     }
// }

// console.log(add()); // f () { ++counter; }

// let a = add();
// console.log(a()); // 1
// console.log(a()); // 2

// Seolah-olah counter itu jd private krn gk bs diakses dr luar tp nilainya tetap dipertahankan krn dia menjadi closure



// Agak aneh klo kita pkk let a untuk menyimpan function. Jd kita pkk Immidiately Invoke Function:

// let add = (function() {
//     let counter = 0;

//     return function() {
//         return ++counter;
//     }
// })();

// let add = (function() { ... }) adlh Immidiately Invoke Function dan kita tambahkan (); diujungnya supaya lngsng dijalankan Immidiately Invoke Function-nya sehingga ketika di-assign ke variabel add, lngsng dijalankan Inner Function-nya.

// console.log(add()); // 1
// console.log(add()); // 2

// counter = 77;
// console.log(add()); // 3
// console.log(add()); // 4