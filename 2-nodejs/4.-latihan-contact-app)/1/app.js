// const fs = require('fs');
// const readline = require('readline');

// const dirPath = './data/';
// const dataPath = dirPath + 'output.json';



// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// // Membuat folder data jika belum ada
// if( ! fs.existsSync(dirPath) ) {
//     fs.mkdirSync(dirPath);
// }

// // Membuat file contacts.json jika belum ada
// if( ! fs.existsSync(dataPath) ) {
//     fs.writeFileSync(dataPath, '[]', 'utf-8');
// }

// Menulis kontak ke dlm file ./data/output.json

// Bs terjadi callback hell. Jd untuk mengatasinya, ubah gaya ngoding nya menjadi pkk async await. Oleh krn itu, kita hrs pkk promise.
// rl.question('Nama: ', (nama) => {
//     rl.question('NPM: ', (npm) => {
//         const contact = { nama, npm };

//         const file = fs.readFileSync(dataPath, 'utf-8');
//         const contacts = JSON.parse(file);
//         contacts.push(contact);
//         fs.writeFileSync(dataPath, JSON.stringify(contacts));

//         rl.close();
//     });
// });



// const pertanyaan1 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question('Nama: ', (nama) => {
//             resolve(nama);
//         });
//     });
// };

// const pertanyaan2 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question('NPM: ', (npm) => {
//             resolve(npm);
//         });
//     });
// };

// const main = async () => {
//     const nama = await pertanyaan1();
//     const npm = await pertanyaan2();

//     const contact = { nama, npm };

//     const file = fs.readFileSync(dataPath, 'utf-8');
//     const contacts = JSON.parse(file);
//     contacts.push(contact);
//     fs.writeFileSync(dataPath, JSON.stringify(contacts));

//     rl.close();
// };

// main();



// Bs kita refactoring menjadi
// const tulisPertanyaan = (pertanyaan) => {
//     return new Promise((resolve, reject) => {
//         rl.question(pertanyaan, (jawaban) => {
//             resolve(jawaban);
//         });
//     });
// };

// const main = async () => {
//     const nama = await tulisPertanyaan('Nama: ');
//     const npm = await tulisPertanyaan('NPM: ');

//     const contact = { nama, npm };

//     const file = fs.readFileSync(dataPath, 'utf-8');
//     const contacts = JSON.parse(file);
//     contacts.push(contact);
//     fs.writeFileSync(dataPath, JSON.stringify(contacts));

//     rl.close();
// };

// main();





// Bs kita abstraksi sehingga semua isi file ini kita pindahkan ke modul (contact.js) dan file entry point ini hanya berisi fungsi utamanya saja:
// const contact = require('./contact.js');

// const main = async () => {
//     const nama = await contact.tulisPertanyaan('Nama: ');
//     const npm = await contact.tulisPertanyaan('NPM: ');

//     contact.simpanContact(nama, npm);
// };

// main();



// Atw pkk Object Destructuring
const { tulisPertanyaan, simpanContact } = require('./contact.js');

const main = async () => {
    const nama = await tulisPertanyaan('Nama: ');
    const npm = await tulisPertanyaan('NPM: ');

    simpanContact(nama, npm);
};

main();










