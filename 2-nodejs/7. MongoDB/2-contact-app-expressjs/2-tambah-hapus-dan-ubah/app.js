const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const { body, validationResult, check } = require('express-validator');
const methodOverride = require('method-override');

const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

// Setup database
require('./utils/db');
const Contact = require('./models/contact');

// Setup EJS
const app = express();
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Setup method override
app.use(methodOverride('_method'));

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



app.get('/contact', async (req, res) => {
    const contacts = await Contact.find(); // Krn bentuknya adlh promise, jd kita pkk cara mudahnya, yaitu async dan await

    res.render('contact', {
        tittle: 'Halaman Contact',
        layout: 'layouts/main-layout',
        contacts,
        msg: req.flash('msg')
    });
});



// Halaman form tambah data contact
app.get('/contact/add', (req, res) => {
    res.render('add-contact', {
        tittle: 'Form Tambah Kontak',
        layout: 'layouts/main-layout'
    });
});

// Proses tambah data contact
app.post('/contact', [
    body('npm')
        .isLength({ min: 5 })
        .custom( async (value) => {
            const duplikat = await Contact.findOne({ npm: value });

            if( duplikat ) {
                throw new Error('NPM sudah terdaftar!');
            }

            return true;
        }),
    check('noHp', 'Harap masukkan nomor HP daerah Indonesia').isMobilePhone('id-ID')
], (req, res) => {
    const errors = validationResult(req);

    if( ! errors.isEmpty() ) {
        res.render('add-contact', {
            tittle: 'Form Tambah Kontak',
            layout: 'layouts/main-layout',
            errors: errors.array()
        });
    } else {
        Contact.insertMany(req.body, (error, result) => {
            req.flash('msg', 'Kontak baru berhasil ditambahkan!');
            res.redirect('/contact'); 
        });
    }
});



// Menghapus kontak
// app.get('/contact/delete/:npm', async (req, res) => {
//     const contact = await Contact.findOne({ npm: req.params.npm });

//     if( ! contact ) {
//         res.status(404);
//         res.send('<h1>Kontak tidak ditemukan!</h1>');
//     } else {
//         Contact.deleteOne({ _id: contact._id }).then((result) => {
//             req.flash('msg', 'Kontak baru berhasil dihapus!');
//             res.redirect('/contact');
//         });
//     }
// });

app.delete('/contact', (req, res) => {
    Contact.deleteOne({ npm: req.body.npm }).then((result) => {
        req.flash('msg', 'Kontak baru berhasil dihapus!');
        res.redirect('/contact');
    });
});



// Form ubah data contact
app.get('/contact/edit/:npm', async (req, res) => {
    const contact = await Contact.findOne({ npm: req.params.npm });

    res.render('edit-contact', {
        tittle: 'Form Ubah Kontak',
        layout: 'layouts/main-layout',
        contact
    });
});

// Proses ubah data
app.put('/contact', [
    body('npm')
        .isLength({ min: 5 })
        .custom( async (value, { req }) => {
            const duplikat = await Contact.findOne({ npm: value });

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
        Contact.updateOne(
            { _id: req.body.idContact },
            {
                $set: {
                    nama: req.body.nama,
                    npm: req.body.npm,
                    noHp: req.body.noHp
                }
            }
        ).then((result) => {
            req.flash('msg', 'Kontak berhasil diubah!');
            res.redirect('/contact');
        });
    }
});



// Halaman Detail
app.get('/contact/:npm', async (req, res) => {
    const contact = await Contact.findOne({ npm: req.params.npm });

    res.render('detail', {
        tittle: 'Halaman Detail Contact',
        layout: 'layouts/main-layout',
        contact
    });
});



app.listen(port, () => {
    console.log(`Mongo Contact App | Listening at http://127.0.0.1:${port}`);
});






