const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const { body, validationResult, check } = require('express-validator');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

const { loadContact, findContact, addContact, cekDuplikat, deleteContact, updateContacts } = require('./utils/contact');

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.urlencoded()); // Built-in middleware. Klo ada mslh deprecated, ubah jd `app.use(express.urlencoded({ extended: true }));`

// Konfigurasi flash
app.use(cookieParser('secret'));
app.use(session({
    cookie: { maxAge: 6000 },
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());

const port = 3000;



app.use(express.static('public'));

app.get('/', (req, res) => {
    const mahasiswa = [
        {
            nama: 'Saiful',
            npm: '19062'
        },
        {
            nama: 'Sani',
            npm: '19022'
        }
    ];

    res.render('index', { 
        npm: '19062', mahasiswa,
        layout: 'layouts/main-layout',
        tittle: 'Halaman Awal',
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        tittle: 'Halaman About',
        layout: 'layouts/main-layout'
    });
});

app.get('/contact', (req, res) => {
    const contacts = loadContact();

    res.render('contact', {
        tittle: 'Halaman Contact',
        layout: 'layouts/main-layout',
        contacts,
        msg: req.flash('msg')
    });
});

// Halaman form tambah data contact
// Hrs tulis di atas route '/contact/:npm' krn klo di bwhnya, method ini akan dikira untuk parameter `:npm`
app.get('/contact/add', (req, res) => {
    res.render('add-contact', {
        tittle: 'Form Tambah Kontak',
        layout: 'layouts/main-layout'
    });
});

// Proses tambah data contact
// Defaultnya gk bs terima yg dikirim dr form, isinya undefined. Jd hrs pkk middleware 'urlencoded' untuk parsing datanya.
app.post('/contact', [
    body('npm') // Hrs sama dgn name di HTML (.ejs)
        .isLength({ min: 5 })
        .custom((value) => {
            const duplikat = cekDuplikat(value);

            if( duplikat ) {
                throw new Error('NPM sudah terdaftar!');
            }

            return true;
        }),
    check('noHp', 'Harap masukkan nomor HP daerah Indonesia').isMobilePhone('id-ID') // Pkk check supaya bs ubah pesan error
], (req, res) => {
    const errors = validationResult(req);

    if( ! errors.isEmpty() ) {
        // return res.status(400).json({ errors: errors.array() });

        res.render('add-contact', {
            tittle: 'Form Tambah Kontak',
            layout: 'layouts/main-layout',
            errors: errors.array() // Klo gk ada error, maka isinya adlh undefined
        });
    } else {
        addContact(req.body);

        // Kirimkan flash message
        req.flash('msg', 'Kontak baru berhasil ditambahkan!');

        res.redirect('/contact'); // Otomatis pkk method GET yg route nya '/contact'
    }
});

// Menghapus kontak
app.get('/contact/delete/:npm', (req, res) => {
    const contact = findContact(req.params.npm);

    if( ! contact ) {
        res.status(404);
        res.send('<h1>Kontak tidak ditemukan!</h1>');
    } else {
        deleteContact(req.params.npm);

        req.flash('msg', 'Kontak baru berhasil dihapus!');
        res.redirect('/contact');
    }
});

// Form ubah data contact
app.get('/contact/edit/:npm', (req, res) => {
    const contact = findContact(req.params.npm);

    res.render('edit-contact', {
        tittle: 'Form Ubah Kontak',
        layout: 'layouts/main-layout',
        contact
    });
});

// Proses ubah data
app.post('/contact/update', [
    body('npm')
        .isLength({ min: 5 })
        .custom((value, { req }) => {
            const duplikat = cekDuplikat(value);

            if( value !== req.body.oldNpm && duplikat ) {
                throw new Error('NPM sudah terdaftar!');
            }

            return true;
        }),
    check('noHp', 'Harap masukkan nomor HP daerah Indonesia').isMobilePhone('id-ID')
], (req, res) => {
    const errors = validationResult(req);

if( ! errors.isEmpty() ) {
        res.render('edit-contact', {
            tittle: 'Form Ubah Kontak',
            layout: 'layouts/main-layout',
            errors: errors.array(),
            contact: req.body
        });
    } else {
        updateContacts(req.body);

        req.flash('msg', 'Kontak berhasil diubah!');
        res.redirect('/contact');
    }
});

// Halaman Detail
app.get('/contact/:npm', (req, res) => {
    const contact = findContact(req.params.npm);

    res.render('detail', {
        tittle: 'Halaman Detail Contact',
        layout: 'layouts/main-layout',
        contact
    });
});



app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>Halaman tidak ditemukan!</h1>');
});



app.listen(port, () => {
    console.log(`Server sedang berjalan (listening) pada port ${port}...`);
});

