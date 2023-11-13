const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

// Setup Database
require('./utils/db');
const Contact = require('./models/contact');

// Setup EJS
const app = express();
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.urlencoded());
app.use(express.static('public'));

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






