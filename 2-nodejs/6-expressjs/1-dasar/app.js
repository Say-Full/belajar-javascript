const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    // res.send('Yo!'); // Mengirimkan string plain text
    
    // Seharusnya key dr objeknya diapit menggunakan petik dua tp method `.json()` yg akan otomatis menambahkannya
    // res.json({
    //     nama: 'Saiful',
    //     npm: '19062',
    //     noHp: '085277770088'
    // });

    res.sendFile('./index.html', { root: __dirname }); // argumen kedua adlh lokasi root. Klo isi "__dirname" berarti lokasinya adlh folder tmpt dmn file ini berada
});

app.get('/about', (req, res) => {
    // res.send('Ini adalah halaman about!');

    res.sendFile('./about.html', { root: __dirname });
});

app.get('/contact', (req, res) => {
    // res.send('Ini adalah halaman contact!');

    res.sendFile('./contact.html', { root: __dirname });
});

// http://127.0.0.1:3000/product/92
// app.get('/product/:id', (req, res) => {
//     res.send('ID: ' + req.params.id);
// });

// http://127.0.0.1:3000/product/92/category/97
// app.get('/product/:id/category/:idCat', (req, res) => {
//     res.send( `ID: ${req.params.id}
//         <br>
//         Category: ${req.params.idCat}`
//     );
// });

// http://127.0.0.1:3000/product/92?category=shoes
app.get('/product/:id', (req, res) => {
    res.send( `ID: ${req.params.id}
        <br>
        Category: ${req.query.category}`
    );
});



// Middleware atw function
// Jgn tulis di paling atas krn method `use` akan menangkap apapun URL-nya sehingga method yg lain gk akan dijalani
// Jd kita pkk `use` untuk menangani jika halamannya gk ada
app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>Halaman tidak ditemukan!</h1>');
});



app.listen(port, () => {
    console.log(`Server sedang berjalan (listening) pada port ${port}...`);
});
