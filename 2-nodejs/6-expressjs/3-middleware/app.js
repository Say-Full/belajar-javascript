const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');

// Third-Party Middleware
app.use(expressLayouts);

const port = 3000;



// Apllication-Level Middleware
app.use((req, res, next) => { // Krn kita gk definisikan route-nya, maka akan dijalankan ketika mengakses route manapun
    console.log('Time: ', Date.now());
    next(); // Agar setelah middleware ini dijalankan, Express berpindah ke middleware selanjutnya.
    
    // Jika ingin mengakses `/about`, maka akan dijalankan middleware ini, baru middleware untuk menampilkan halaman about.
    // Klo gk ditulis `next();`, maka ketika mengakses '/about', maka middleware ini dijalankan tp selanjutnya dia akan hanging (hang), tdk lanjut ke mana-mana.
    // Klo routing `app.get();` gk perlu tulis `next();` krn setelah dijalankan, dia akan berhenti. Klo kita taruh `next();`, maka akan dicari middleware selanjutnya.

    // Misalkan kita taruh `next();` di route `/about`, maka middleware ini akan dijalankan, lalu ditampilkan halaman about, lalu dijalankan middleware yg kita buat untuk menampilkan HALAMAN WEB yg berisi error 404.
    // Klo menampilkan halaman web, maka dia akan mengirimkan headers. Satu halaman gk bs mengakses lbh dr 1 headers. Jd, halaman `/about` RENDER HALAMAN about dan middleware error 404 SEND HALAMAN error 404 yg mana keduanya menampilkan halaman web (masing-masing mengirimkan headers).
    // Oleh krn itu, ditampilkan error di terminalnya.

    // Express akan menjalankan middleware sesuai urutan dan di route (dianggap middleware jg) krn gk menuliskan `next();`, maka gk akan dijalankan middleware yg selanjutnya.
});

// Built-In Middleware
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

