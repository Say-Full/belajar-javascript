const fs = require('fs');

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
};

// Mencari sebuah kontak berdasarkan NPM
const findContact = (npm) => {
    const contacts = loadContact();

    const contact = contacts.find( (contact) => contact.npm === npm );

    return contact;
};

// Menimpa database dgn ditambahkan data yg baru
const saveContacts = (contacts) => {
    fs.writeFileSync('data/output.json', JSON.stringify(contacts));
};

// Menambah data contact baru
const addContact = (contact) => {
    const contacts = loadContact();
    contacts.push(contact);
    saveContacts(contacts);
};

// Cek duplikat NPM
const cekDuplikat = (npm) => {
    const contacts = loadContact();
    
    return contacts.find((contact) => contact.npm === npm);
}



module.exports = { loadContact, findContact, addContact, cekDuplikat }