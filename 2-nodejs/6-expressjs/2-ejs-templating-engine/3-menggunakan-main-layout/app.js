const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(expressLayouts);

const port = 3000;

app.get('/', (req, res) => {
    const mahasiswa = [
        {
            nama: 'Sani',
            npm: '19022'
        },
    ];

    res.render('index', { 
        npm: '19062', mahasiswa,
        layout: 'layouts/main-layout', // Supaya dibaca file views/index.html itu adlh body untuk bagian body di file views/layouts/main-layout.ejs
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
    res.render('contact', {
        tittle: 'Halaman Contact',
        layout: 'layouts/main-layout'
    });
});

// http://127.0.0.1:3000/product/92?category=shoes
app.get('/product/:id', (req, res) => {
    res.send( `ID: ${req.params.id}
        <br>
        Category: ${req.query.category}`
    );
});



app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>Halaman tidak ditemukan!</h1>');
});



app.listen(port, () => {
    console.log(`Server sedang berjalan (listening) pada port ${port}...`);
});

