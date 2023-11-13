// console.log(process.argv[0]); // direktori node
// console.log(process.argv[1]); // direktori script yg dijlnkan

const yargs = require("yargs");
const { simpanContact, listContact, detailContact, deleteContact } = require("./contact");


/**
 * `node .\app.js add --nama="Saiful`
 * 
 * { _: [ 'add' ], nama: 'Saiful', '$0': 'app.js' }
 */
// console.log(yargs.argv);

/**
 * Kita buat perintah menggunakan method .command(cmd, desc, [builder], [handler])
 * cmd = perintahnya
 * desc = deskripsi perintahnya
 * builder = objek pembentuk perintah (argumen untuk perintahnya)
 * handler = fungsi yg akan dilakukan ketika perintahnya dieksekusi
 * 
 * Diberikan `cmd` default, yaitu `--help` dan `--version` untuk melihat daftar perintah dan deskripsi yg dh didaftarkan.
 */
// yargs.command('add', 'Menambahkan contact baru', () => {}, (argv) => { console.log(argv.nama) });

// yargs.parse();



yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: "Nama panggilan",
            demandOption: true,
            type: 'string',
        },
        npm: {
            describe: "Nomor Pokok Mahasiswa",
            demandOption: true,
            type: 'string',
        },
        noHp: {
            describe: "Nomor Handphone",
            demandOption: false,
            type: 'string',
        }
    },
    handler(argv) {
        simpanContact(argv.nama, argv.npm, argv.noHp);
    }
}).demandCommand(); // Menampilkan warning ketika script ini dijalankan tanpa memberikan argumen yg dibutuhkan. Cukup sekali tulis dan berlaku juga untuk perintah yg lainnya



yargs.command({
    command: 'list',
    describe: 'Menampilkan daftar nama dan NPM semua kontak',
    handler() {
        listContact();
    }
});



yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail sebuah kontak berdasarkan nama',
    builder: {
        nama: {
            describe: "Nama panggilan",
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        detailContact(argv.nama);
    }
});



yargs.command({
    command: 'delete',
    describe: 'Menghapus sebuah kontak berdasarkan npm',
    builder: {
        npm: {
            describe: "Nama Pokok Mahasiswa",
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        deleteContact(argv.npm);
    }
});



yargs.parse();