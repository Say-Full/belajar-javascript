// const angka = ['satu', 'dua', 'tiga'];

// const [a, b, c] = coba;
// console.log(a); // 'satu'
// console.log(b); // 'dua'
// console.log(c); // 'tiga'

// const [x, , z] = coba;
// console.log(x); // 'satu'
// console.log(z); // 'tiga'

// [x, z] = [z, x];
// console.log(x); // 'tiga'
// console.log(z); // 'satu'



// function coba() {
//     return [1, 2];
// }

// const c = coba();
// console.log(c); // Array

// const [a, b] = coba();
// console.log(a); // 1
// console.log(b); // 2





// Rest Parameters

// const [a, ...values] = [1, 2, 3];
// console.log(a); // 1
// console.log(values); // [2, 3]





// Destructuring Object

// const mhs = {
//     nama: 'Saiful',
//     npm: '19062'
// };
// const {nama, npm} = mhs; // Hrs sesuai dgn nama key di object-nya atw buat inisial
// console.log(nama); // 'Saiful'
// console.log(npm); // '19062'

// const {npm, nama, umur = 19} = mhs; // Bs kasi default value dan krn object, maka blh gk berurutan dgn nama key object nya
// console.log(nama);
// console.log(npm);

// const {nama: n, npm: np} = mhs;
// console.log(n); // 'Saiful'
// console.log(np); // '19062'

// const {nama: n, npm: np, umur: u = 19} = mhs;
// console.log(n); // 'Saiful'
// console.log(np); // '19062'
// console.log(umur); // Error
// console.log(u); // 19

// const {nama, ...values} = mhs;
// console.log(values); // Object



// Assignment tanpa deklarasi object
// ( {nama, npm} = { nama: 'Saiful', npm: '19062' } );
// console.log(nama); // 'Saiful'
// console.log(npm); // '19062'



// Mengambil field pd object setelah dikirim sbg parameter untuk function

// const mhs = {
//     id: 62,
//     nama: 'Saiful',
//     npm: '19062'
// };

// function getIdMhs(mhs) {
//     return mhs.id;
// }

// function getIdMhs({ id }) {
//     return id;
// }

// console.log(getIdMhs(mhs));



// Destructuring argumen

// const mhs1 = {
//     id: 62,
//     nama: 'Saiful',
//     npm: '19062',
//     nilai: {
//         uts: 97,
//         uas: 99
//     }
// };

// function cetakMhs(mhs) {
//     return `Mahasiswa dgn nama ${mhs.nama} dan NPM ${mhs.npm} memiliki nilai UAS sebesar ${mhs.nilai.uas}`;
// }

// console.log(cetakMhs(mhs1));



// function cetakMhs(nama, npm, uas) {
//     return `Mahasiswa dgn nama ${mhs.nama} dan NPM ${mhs.npm} memiliki nilai UAS sebesar ${mhs.nilai.uas}`;
// }

// console.log(cetakMhs(mhs1.nama, mhs1.npm, mhs1.nilai.uas));



// function cetakMhs({ nama, npm, nilai: {uts, uas} }) {
//     return `Mahasiswa dgn nama ${nama} dan NPM ${npm} memiliki nilai UAS sebesar ${uas}`;
// }

// console.log(cetakMhs(mhs1));
