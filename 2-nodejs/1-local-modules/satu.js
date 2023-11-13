function sapa(nama) {
    return `Yo! ${nama}`;
}

let umur = 19;

const mhs = {
    nama: 'Sani',
    npm: '19062',
    cetakMahasiswa() {
        return `Saya ${this.nama} dengan NPM ${this.npm}`;
    }
};

class Orang {
    constructor() {
        console.log('Membuat objek orang!');
    }
}

module.exports = {
    sapa: sapa,
    umurOrang: umur,
    mahasiswa: mhs,
    Orang: Orang
}
