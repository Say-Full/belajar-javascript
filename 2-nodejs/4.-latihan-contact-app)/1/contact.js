const fs = require('fs');
const readline = require('readline');

const dirPath = './data/';
const dataPath = dirPath + 'output.json';



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Membuat folder data jika belum ada
if( ! fs.existsSync(dirPath) ) {
    fs.mkdirSync(dirPath);
}

// Membuat file contacts.json jika belum ada
if( ! fs.existsSync(dataPath) ) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (jawaban) => {
            resolve(jawaban);
        });
    });
};

const simpanContact = (nama, npm) => {
    const contact = { nama, npm };

    const file = fs.readFileSync(dataPath, 'utf-8');
    const contacts = JSON.parse(file);
    contacts.push(contact);
    fs.writeFileSync(dataPath, JSON.stringify(contacts));

    rl.close();
};

module.exports = { tulisPertanyaan, simpanContact };