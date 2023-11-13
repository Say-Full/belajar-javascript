// Function Declaration
// function sapa(nama) {
//     alert('Yo ' + nama);
// }

// sapa('Saiful');



// Function Expression (anonymous function)
// let sapa = function(nama) {
//     alert('Yo ' + nama);
// }

// sapa('Saiful');



// let sapa = (nama) => {
//     alert('Yo ' + nama);
// }

// sapa('Saiful');



// let sapa = (nama) => { return `Yo ${nama}`; }

// console.log(sapa('Saiful'));



// Klo cuma satu parameter
// let sapa = nama => { return `Yo ${nama}`; }

// console.log(sapa('Saiful'));



// Klo cuma return (implicit return)
// let sapa = nama => { `Yo ${nama}`; }

// console.log(sapa('Saiful'));



// Klo cuma return (implicit return) bs dibuat lbh ringkas
// let sapa = nama => `Yo ${nama}`;

// console.log(sapa('Saiful'));



// Klo gk ada parameter hrs ditulis kurung
// let sapa = () => `Yo`;

// console.log(sapa());



// Klo lbh dr satu parameter hrs ditulis kurung
// let sapa = (nama, namaUjung) => `Yo ${nama} ${namaUjung}`;

// console.log(sapa('Saiful', 'Sani'));





// Function Map

// let mahasiswa = ['Saiful', 'Sani'];

// Hitung jmlh huruf dr setiap nama mahasiswa dan simpan ke dlm array untuk ditampilkan ke layar

// Function biasa
// let jumlahHuruf = mahasiswa.map(function(nama) {
//     return nama.length;
// });

// console.log(jumlahHuruf);



// Arrow Function
// let jumlahHuruf = mahasiswa.map(nama => nama.length );

// console.log(jumlahHuruf);



// Arrow Function tp mw mengembalikan objek
// Gk blh buat { nama.length } krn klo pkk kurung kurawal dikira mw return. Jd bungkus pkk kurung biasa
// let jumlahHuruf = mahasiswa.map(nama => ({ nama: nama, panjangNama: nama.length }) );

// console.table(jumlahHuruf);



// Arrow Function tp mw mengembalikan objek
// Klo mw tampilin nama objek yg sama dgn nama propertinya, bs tulis salah satu aja
// let jumlahHuruf = mahasiswa.map(nama => ({ nama, panjangNama: nama.length }) );

// console.table(jumlahHuruf);





// Konsep this

// Constructor Function (pembuatannya pkk Function Expression)
// const Mahasiswa = function() {
//     this.nama = 'Saiful'; // `this` mengacu pada objek Mahasiswa

//     this.sapa = function() {
//         console.log(`Yo ${this.nama}`);
//     }
// }

// const saiful = new Mahasiswa();



// Arrow Function

// const Mahasiswa = function() {
//     this.nama = 'Saiful'; // `this` mengacu pada objek Mahasiswa

//     this.sapa = () => {
//         console.log(`Yo ${this.nama}`);
//     }
// }

// const saiful = new Mahasiswa();



// Pkk Object Literal

// const mhs1 = {
//     nama: 'Saiful',
//     sapa: function() {
//         console.log(`Yo ${this.nama}`);
//     }
// }

// mhs1.sapa();



// const mhs1 = {
//     nama: 'Saiful',
//     sapa: () => {
//         console.log(`Yo ${this.nama}`); // `this.nama` bernilai undefined
//     }
// }

// mhs1.sapa();





// const Mahasiswa = function() {
//     this.nama = 'Saiful';
//     this.umur = 22;

//     this.sapa = function() { // Function Expression gk kena hoisting krn dia disimpan ke dlm variabel
//         console.log(`Yo ${this.nama}`);
//     }

//     setInterval(function() { // Function Declaration kena hoisting
//         console.log(this); // 'NaN' krn akan dicek `this` punya global (window) akibat kena hoisting
//     }, 500); // Jalankan method ini setiap 500 milidetik (0,5 detik)
// }

// const saiful = new Mahasiswa();










