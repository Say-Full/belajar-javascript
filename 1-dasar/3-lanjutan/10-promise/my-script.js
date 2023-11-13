// fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers') // Mengembalikan promise
//     .then( response => response.json() ) // Mengembalikan promise
//     .then( response => console.log(response) );




// Cnth sederhana promise

// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if( ditepati ) {
//         resolve('Janji ditepati!'); // sederhananya kita return string. Sbnrnya bs aja request ke API atw menjalankan sebuah proses yg kompleks
//     } else {
//         reject('Ingkar janji!');
//     }
// });

// console.log(janji1); // Lngsng dijalani `janji1` tanpa ada wkt tunggu


// janji1
//     .then( response => console.log('OK: ' + response) ) // Ambil yg resolve
//     .catch( response => console.log('Not OK: ' + response) ); // Ambil yg reject





// Cnth yg ada delay nya krn di kenyataannya bs jd prosesnya lama krn data yg mw diambil itu bnyk atw prosesnya kompleks

let ditepati = false;
const janji2 = new Promise((resolve, reject) => {
    if( ditepati ) {
        setTimeout(() => {
            resolve('Janji ditepati setelah beberapa waktu!');

        }, 2000);
    } else {
        setTimeout(() => {
            reject('Janji tidak ditepati setelah beberapa waktu!');

        }, 2000);
    }
});

// console.log('Mulai');

// // console.log(janji2); // Gk akan selesai krn blm jalani then
// console.log( janji2.then(() => console.log(janji2)) ); // Yg `janji2.then((...))` untuk cetak resolve ketika promise lg dijalani dan `console.log(janji2)` ketika promise selesai dijalani biar kelihatan ada pending nya (asynchronous)

// console.log('Selesai');

// Nti akan dicetak 'Mulai', lalu promise nya pending, lalu 'Selesai', dan terakhir dijalani yg `.then()` nya (resolve)



// console.log('Mulai');

// janji2
//     .then( response => console.log('OK: ' + response) )
//     .catch( response => console.log('Not OK: ' + response) );

// console.log('Selesai');

// Nti akan dicetak 'Mulai', lalu 'Selesai', dan terakhir dijalani yg `.then()` nya ('OK: ' + resolve)



// console.log('Mulai');

// janji2
//     .finally('Selesai menunggu!') // Dijalankan ketika promise nya dh selesau pending, jalani finally dlu baru salah satu dr then atw catch
//     .then( response => console.log('OK: ' + response) )
//     .catch( response => console.log('Not OK: ' + response) );

// console.log('Selesai');



// Dlm promise ada method all untuk menjalankan bnyk promise sekaligus. Misalkan kita mw connect ke 2 API yg berbeda.
const film = new Promise( resolve => { // Bgsnya reject nya jg ditulis
    setTimeout(() => {
        resolve([{
            judul: 'Avengers',
            sutradata: 'Saiful',
            pemeran: 'Sani, Sai'
        }])
    },  1000);
});

const cuaca = new Promise( resolve => { // Bgsnya reject nya jg ditulis
    setTimeout(() => {
        resolve([{
            kota: 'Banda Aceh',
            temperatur: 27,
            kondisi: 'cerah'
        }])
    },  500);
});

// Promise.all([film, cuaca])
//     .then(response => console.log(response)); // Akan dijalankan keduanya. Yg muncul yg cuaca dlu krn wkt tunggunya lbh singkat

// Klo gk mw hasilnya berupa array di dlm array, kita bs pkk spread operator:
Promise.all([film, cuaca])
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    });