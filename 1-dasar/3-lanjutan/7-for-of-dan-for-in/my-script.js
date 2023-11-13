// for...of

// const mahasiswa = ['Saiful', 'Sani'];

// mahasiswa.forEach( (mhs, i) => console.log(mhs, i) ); // i adlh indeks array



// Looping untuk elemen pada Array of String
// for( const mhs of mahasiswa ) {
//     // console.log(mhs); // 'Saiful' \n 'Sani'

//     // Looping untuk setiap elemen array, yaitu String
//     for( const m of mhs ) {
//         console.log(m); // 'S' \n 'a' \n 'i' \n 'f' \n 'u' \n 'l' \n 'S' \n 'a' \n 'n' 'i'
//     }
// }



// Mengakali supaya for...of punya indeks
// for( const [i, mhs] of mahasiswa.entries ) {
//     console.log(mhs, i);
// }



// const liNama = document.querySelectorAll('.nama'); // NodeList

// Browser skrng dh mendukung looping NodeList menggunakan ForEach
// liNama.forEach(n => console.log(n.textContent)); // `n.textContent` = `n.innerHTML` = Teks isi dr node nya.

// for( n of liNama ) {
//     console.log(n.innerHTML);
// }



// function tambah() {
//     console.log(arguments); // Objek seperti array, memiliki indeks dan nilai dr argumen yg dikirim. Jd gk bs pkk forEach dan method-method array (map, reduce, dll.)

//     let jumlah = 0;

//     for( arg of arguments ) {
//         jumlah += arg;
//     }

//     return jumlah;
// }

// console.log(tambah(1, 2, 3));





// for...in

const mahasiswa = {
    nama: 'Saiful',
    npm: '19062'
};

// for( mhs of mahasiswa ) { console.log(mhs); } // Error krn bkn Iterable

for( mhs in mahasiswa ) { 
    console.log(mhs); // 'nama' \n 'npm'

    console.log(mahasiswa[mhs]); // 'Saiful' \n '19062'
}