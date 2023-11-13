// Synchronous Callback
// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }

// function tampilPesan(fungsiCallback) {
//     const nama = prompt('Masukkan nama: ');

//     fungsiCallback(nama);
// }

// tampilPesan(halo); // Jgn tulis `halo()` dan fungsi halo() bs kita ganti dgn anonymous function / arrow function:

// tampilPesan( nama => alert(`Halo, ${nama}`) );



// const mahasiswa = [
//     {
//         nama: 'Saiful',
//         npm: '19062'
//     },
//     {
//         nama: 'Sani',
//         npm: '19064'
//     }
// ];

// console.log('Mulai');
// mahasiswa.forEach( mhs => console.log(mhs.nama) ); // Biasanya parameter Higher Order Function itu berisi callback. Jd Higher Order Function itu biasanya callback function
// console.log('Selesai');

// Krn ini looping nya biasanya aja, jd cpt kita tunggunya. Tp bs aja nti kita ambil data dr API dan prosesnya lama sehingga terjadi blocking.





// Asynchronous Callback pkk vanilla JS (JS murni)

// Cnth penggunaan ajax untuk ambil data dr JSON dgn anggap URL adlh URL API dan success dan error adlh callback.
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if( xhr.readyState === 4 ) {
//             if(xhr.status === 200 ) {
//                 success(xhr.response);
//             } else if( xhr.status === 404 ) {
//                 error(); // Munculkan pesan error
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }

// console.log('Mulai');

// // Krn pkk ajax, akan error XMLHttpRequest krn di-block oleh CORS.
// Jd, jalanin script ini pkk web server, cnthnya di dlm XAMPP (butuh server Apache), atw install extension Live Server di VSCode, klik kanan di file HTML dan pilih open with Live Server
// getDataMahasiswa('data/mahasiswa.json', results => {
//     // console.log(JSON.parse(results)); // Parameter results msh bersifat string. Jd kita ubah ke dlm bentuk objek
//     const mhs = JSON.parse(results);
    
//     mhs.forEach( m => console.log(m.nama) );
// }, () => {

// });

// console.log('Selesai');

// Yg akan tampil dluan adlh 'Mulai' dan 'Selesai' baru dijalankan fungsi asynchronous nya.



// Cnth Asynchronous pkk jQuery

// Kita pkk jQuery CDN biar connect secara online. Pilih yg uncompressed atw minified, jgn yg slim krn slim gk ada ajax. Di HTML, taruh sblm pemanggilan script JS kita:
// <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script> 

console.log('Mulai');

$.ajax({
    url: 'data/mahasiswa.json',
    sucess: (mhs) => { // Data yg dibalikin dh lngsng dlm bentuk objek JSON
        // console.log(mhs);

        mhs.forEach( m => console.log(m) );
    },
    error: (e) => {
        console.log(e.responseText);
    }
});

console.log('Selesai');





