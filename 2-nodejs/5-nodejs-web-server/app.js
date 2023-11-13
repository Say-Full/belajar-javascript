const http = require('http');



// const server = http.createServer((req, res) => {});

// server.listen(3000, () => {
//     console.log('Server sedang berjalan (listening) pada port 3000');
// });


// const port = 3000;

// http
//     .createServer((req, res) => {
//         res.write('Yo!'); // Plain text
//         res.end();
//     }).listen(port, () => {
//         console.log(`Server sedang berjalan (listening) pada port ${port}...`);
//     });

// Di browser, tuliskan di URL-nya `localhost:3000` atw `http://127.0.0.1:3000/`



// const port = 3000;

// http
//     .createServer((req, res) => {
//         res.writeHead(200, {
//             'Content-Type': 'text/html'
//         });
//         res.write('Yo!');
//         res.end();
//     }).listen(port, () => {
//         console.log(`Server sedang berjalan (listening) pada port ${port}...`);
//     });



// const port = 3000;

// http
//     .createServer((req, res) => {
//         res.writeHead(200, {
//             'Content-Type': 'text/html'
//         });

//         const url = req.url;

//         if( url === '/about' ) {
//             res.write('<h1>Ini halaman about</h1>'); // Tag html, head, dan body akan dibuat secara otomatis oleh browser
//             res.end();
//         } else if( url === '/contact' ) {
//             res.write('<h1>Ini halaman contact</h1>');
//             res.end();
//         } else {
//             res.write('Yo!');
//             res.end();
//         }
        
//     }).listen(port, () => {
//         console.log(`Server sedang berjalan (listening) pada port ${port}...`);
//     });



const fs = require('fs');

const port = 3000;

// http
//     .createServer((req, res) => {
//         res.writeHead(200, {
//             'Content-Type': 'text/html'
//         });

//         const url = req.url;

//         if( url === '/about' ) {
//             res.write('<h1>Ini halaman about</h1>');
//             res.end();
//         } else if( url === '/contact' ) {
//             res.write('<h1>Ini halaman contact</h1>');
//             res.end();
//         } else {
//             fs.readFile('./index.html', (err, data) => {
//                 if( err ) {
//                     res.writeHead(404);
//                     res.write('Error: file tidak ditemukan!');
//                 } else {
//                     res.write(data);
//                 }

//                 res.end();
//             });
//         }
        
//     }).listen(port, () => {
//         console.log(`Server sedang berjalan (listening) pada port ${port}...`);
//     });
    

    
// http
//     .createServer((req, res) => {
//         res.writeHead(200, {
//             'Content-Type': 'text/html'
//         });

//         const url = req.url;

//         if( url === '/about' ) {
//             fs.readFile('./about.html', (err, data) => {
//                 if( err ) {
//                     res.writeHead(404);
//                     res.write('Error: file tidak ditemukan!');
//                 } else {
//                     res.write(data);
//                 }

//                 res.end();
//             });
//         } else if( url === '/contact' ) {
//             res.write('<h1>Ini halaman contact</h1>');
//             res.end();
//         } else {
//             fs.readFile('./index.html', (err, data) => {
//                 if( err ) {
//                     res.writeHead(404);
//                     res.write('Error: file tidak ditemukan!');
//                 } else {
//                     res.write(data);
//                 }

//                 res.end();
//             });
//         }
        
//     }).listen(port, () => {
//         console.log(`Server sedang berjalan (listening) pada port ${port}...`);
//     });
    
    

// Abstraksi 

const renderHtml = (path, res) => {
    fs.readFile(path, (err, data) => {
        if( err ) {
            res.writeHead(404);
            res.write('Error: file tidak ditemukan!');
        } else {
            res.write(data);
        }

        res.end();
    });
};

// http
//     .createServer((req, res) => {
//         res.writeHead(200, {
//             'Content-Type': 'text/html'
//         });

//         const url = req.url;

//         if( url === '/about' ) {
//             renderHtml('./about.html', res);
//         } else if( url === '/contact' ) {
//             renderHtml('./contact.html', res);
//         } else {
//             renderHtml('./index.html', res);
//         }
        
//     }).listen(port, () => {
//         console.log(`Server sedang berjalan (listening) pada port ${port}...`);
//     });



http
    .createServer((req, res) => {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        const url = req.url;

        switch (url) {
            case '/about':
                renderHtml('./about.html', res);
                break;

            case '/contact':
                renderHtml('./contact.html', res);
                break;
                
            default:
                renderHtml('./index.html', res);
                break;
        }
 
    }).listen(port, () => {
        console.log(`Server sedang berjalan (listening) pada port ${port}...`);
    });








    