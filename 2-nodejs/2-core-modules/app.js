const fs = require('fs');

// Menulis file

// Menuliskan string ke file (synchronous)
// try {
//     fs.writeFileSync('output.txt', 'Yo!'); // Menimpa atw membuat file baru, tp gk bs untuk folder
// } catch(e) {
//     console.log(e);
// }



// Menuliskan string ke file (asynchronous)
// fs.writeFile('output.txt', 'Yo async!', (err) => {
//     console.log(err);
// });





// Membaca file

// Membaca file (synchronous)
// const data = fs.readFileSync('output.txt'); // Mengembalikan buffer
// console.log(data.toString());

// const data = fs.readFileSync('output.txt', 'utf-8'); // Mengonvert buffer ke String
// console.log(data);



// Membaca file (asynchronous)
// fs.readFile('output.txt', 'utf-8', (err, data) => {
//     if( err ) throw err; // throw mcm return, lngsng mengakhiri blok kodenya

//     console.log(data);
// });





// Readline adlh modul untuk membaca apa yg akan kita tuliskan nti di command prompt

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question('Nama: ', (nama) => {
//     console.log(`Yo ${nama}!`);
//     rl.close();
// });

// rl.question('Nama: ', (nama) => {
//     rl.question('NPM: ', (npm) => {
//         console.log(`Yo ${nama} dengan NPM ${npm}!`);
//         rl.close();
//     });
// });



rl.question('Nama: ', (nama) => {
    rl.question('NPM: ', (npm) => {
        const contact = { nama, npm };

        const file = fs.readFileSync('output.json', 'utf-8'); // Berupa string
        const contacts = JSON.parse(file);
        contacts.push(contact);
        fs.writeFileSync('output.json', JSON.stringify(contacts)); // String jd JSON

        rl.close();
    });
});