// Cara membuat objek di JS
// 1. Object Literal

// let mahasiswa = {
//     nama: 'Saiful',
//     energi: 10,
//     makan: function(porsi) { // Klo properti berisi nilai, klo method berisi function
//         this.energi = this.energi + porsi;
        
//         // String bs pkk '' atw "" atw `` (string literal)
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }

// Klo mw buat objek mahasiswa lg pkk object literal, maka yg atas ni ubah jd mahasiswa1, copy, dan objek mahasiswa baru bs dikasi nama mahasiswa2 walaupun isinya berbeda.
// Object literal ini memakan bnyk resource krn melakukan sesuatu yg sama berulang-ulang, yaitu mendeklarasikan properti dan method. Jd objeknya akan dibuat berulang-ulang walaupun dgn isi yg berbeda sehingga tdk efektif untuk objek yg bnyk.





// 2. Function declaration
// Gk perlu buat duplikat kyk object literal

// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }

//     mahasiswa.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }

//     return mahasiswa;
// }

// let saiful = Mahasiswa('Saiful', 9);
// let sani = Mahasiswa('Sani', 7);

// Di blkng layar, method makan dan main akan tetap dibuat dan disimpan untuk masing-masing objek (di dlm memori) walaupun tdk digunakan.
// Supaya lbh efektif, buat objek terpisah yg berisi method makan dan main sehingga method-method nya hanya akan disimpan sekali di dlm memori dan ketika objek Mahasiswa menggunakan method trsbt, ia akan mengacu objek yg dh disimpan di dlm memori, method nya gk dibuat berulang kali:

// const methodMahasiswa = {
//     makan: function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },
//     main: function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     },
//     tidur: function(jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, selamat tidur!`);
//     }
// };

// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     mahasiswa.makan = methodMahasiswa.makan;
//     mahasiswa.main = methodMahasiswa.main;

//     return mahasiswa;
// }

// Tp skrng kita hrs kelola 2 objek. Klo ada penambahan method baru, hrs tambahin manual di methodMahasiswa dan daftarkan method nya ke dlm Mahasiswa. Gtu jgk klo ada method yg dihapus. Supaya otomatis, gunakan Object.create()





// 3. Constructor function (pkk keyword new)

// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }

//     this.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }
// }

// let saiful = new Mahasiswa('Saiful', 11);





// 4. Object.create
// Membuat objek baru dgn parameternya mengacu kpd parent object (inheritance). Jd kita buat objek baru dgn membawa properti dan method dr objek lain.

// const methodMahasiswa = {
//     makan: function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },
//     main: function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     },
//     tidur: function(jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, selamat tidur!`);
//     }
// };

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// Tp sbnrnya yg kita butuhkan hanya objek Mahasiswa aja, sedangkan methodMahasiswa adlh objek baru yg kita buat sendiri. Jd kita kerjanya dua kali. Makanya kita gunakan prototype.





// 5. Prototype

// function Mahasiswa(nama, energi) {
//     // let this = {}; // JS mengerjakan ini di blkng layar
//     // let this = Object.create(Mahasiswa.prototype); // Sbnrnya ini yg JS kerjakan di blkng layar sehingga tdk perlu membuat objek lain sbg parent krn constructor function dh punya parent yg bernama prototype

//     this.nama = nama;
//     this.energi = energi;
    
//     // return this; // JS mengerjakan ini di blkng layar
// }

// Mahasiswa.prototype.makan = function(porsi) { // Akan disimpan di dlm objek __proto__
//     this.energi += porsi;

//     return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function(jam) {
//     this.energi -= jam;

//     return `Halo ${this.nama}, selamat main!`;
// }

// Konsep ini mirip dgn konsep class di bhs pemrograman object-oriented (Java, PHP, dll.) yg memiliki inheritance (pewarisan). Di JS, konsep ini dinamakan prototypal inheritance (pewarisan menggunakan prototipe).
// JS gk pkk konsep class krn wkt pembuatannya sangat singkat, sekitar seminggu. Tp skrng JS dh bs pkk class.





// Versi class

class Mahasiswa { // Sbnrnya di blkng layar, class akan menjalankan prototype. Jd sama aja.
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) { // Jg disimpan di dlm __proto__
        this.energi += porsi;

        return `Halo ${this.nama}, selamat makan!`;
    }

    main(jam) {
        this.energi -= jam;

        return `Halo ${this.nama}, selamat main!`;
    }
}





// Cek method apa aja yg ada di dlm suatu objek:
// console.log(Array); // Dan lihat isi dlm objek __proto__

// console.log(Array.prototype);
// console.log(Number.prototype);