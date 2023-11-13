const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

const { loadContact, findContact } = require('./utils/contact');

app.set('view engine', 'ejs');
app.use(expressLayouts);

const port = 3000;



app.use(express.static('public'));

app.get('/', (req, res) => {
    const mahasiswa = [
        {
            nama: 'Sani',
            npm: '19022'
        },
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
        contacts
    });
});

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

