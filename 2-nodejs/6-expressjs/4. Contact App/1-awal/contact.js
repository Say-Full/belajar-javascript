const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');

const dirPath = './data/';
const dataPath = dirPath + 'output.json';





// Membuat folder data jika belum ada
if( ! fs.existsSync(dirPath) ) {
    fs.mkdirSync(dirPath);
}

// Membuat file contacts.json jika belum ada
if( ! fs.existsSync(dataPath) ) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

// Abstraksi memuat database kontak
const loadContact = () => {
    const file = fs.readFileSync(dataPath, 'utf-8');
    const contacts = JSON.parse(file);

    return contacts;
}



// Menyimpan kontak baru
const simpanContact = (nama, npm, noHp) => {
    const newContact = { nama, npm, noHp };

    const contacts = loadContact();

    // Cek duplikat NPM
    const duplikat = contacts.find((contact) => contact.npm === npm);
    
    if( duplikat ) {
        console.log(chalk.red.inverse.bold`NPM sudah terdaftar!`);
        return false;
    }

    // Cek no HP
    if( noHp ) {
        if( ! validator.isMobilePhone(noHp, 'id-ID') ) {
            console.log(chalk.red.inverse.bold`Nomor HP tidak valid!`);
            return false;
        }
    }

    contacts.push(newContact);
    fs.writeFileSync(dataPath, JSON.stringify(contacts));
    console.log(chalk.green.inverse.bold`Kontak berhasil disimpan!`);
}



// Menampilkan nama dan NPM semua kontak
const listContact = () => {
    const contacts = loadContact();

    console.log(chalk.cyan.inverse.bold`\nDaftar Kontak:`);

    contacts.forEach( (contact, i) => {
        console.log(`${i + 1}. ${contact.nama} - ${contact.npm}`);
    } );

    console.log();
};



// Menampilkan detail sebuah kontak berdasarkan nama
const detailContact = (nama) => {
    const contacts = loadContact();

    const contact = contacts.find( (contact) => contact.nama.toLowerCase() === nama.toLowerCase() );

    if( ! contact ) {
        console.log(chalk.red.inverse.bold`${nama} tidak ditemukan!`);

        return false;
    }

    console.log(chalk.cyan.inverse.bold`${contact.nama}`);
    console.log(contact.npm);
    (contact.noHp) ? console.log(contact.noHp) : undefined;
}



// Menghapus sebuah kontak berdasarkan NPM
const deleteContact = (npm) => {
    const contacts = loadContact();

    const newContacts = contacts.filter( (contact) => contact.npm !== npm );

    if( contacts.length === newContacts.length ) {
        console.log(chalk.red.inverse.bold`${npm} tidak ditemukan!`);

        return false;
    }

    fs.writeFileSync(dataPath, JSON.stringify(newContacts));
    console.log(chalk.green.inverse.bold`Data kontak ${npm} berhasil dihapus`);

}



module.exports = { simpanContact, listContact, detailContact, deleteContact };