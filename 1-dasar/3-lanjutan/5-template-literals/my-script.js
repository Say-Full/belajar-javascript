// HTML Fragments

const mhs = [
    {
        nama: 'Saiful',
        npm: '19062',
        mataKuliah: [
            'HCI',
            'TWM',
            'PM'
        ]
    },
    {
        nama: 'Sani',
        npm: '19063',
        hobi: 'Menggambar',
        mataKuliah: [
            'HCI',
            'PPL',
            'PLBK'
        ]
    }
]

function cetakMataKuliah(mataKuliah) {
    return `
        <ol>
            ${ mataKuliah.map(mk => `<li>${ mk }</li>`).join('') }
        </ol>
    `;
}

const elemen = `<div class="mahasiswa">
    ${ (mhs.map(m => `<ul>
        <li class="nama">Nama: ${ m.nama }</li>

        <li class="npm">NPM: ${ m.npm }</li>

        ${ m.hobi ? `<li>Hobi: ${m.hobi}</li>` : '' }

        <li>Mata Kuliah: ${ cetakMataKuliah(m.mataKuliah) }</li>
    </ul>`)).join('') }
</div>`;

document.body.innerHTML = elemen;





// Tagged Template

const nama = document.querySelector('.nama').textContent.split(':')[1].trimStart();
const npm = document.querySelector('.npm').textContent.split(':')[1].trimStart();



// function coba(strings) {
//     return strings;
// }

// const str = coba`Yo, nama saya ${nama} dengan NPM ${npm} !!!`;
// console.log(str);
/**
 * Mengembalikan array yg berisi 3 elemen:
 * 0: "Yo, nama saya "
 * 1: " dengan NPM "
 * 2: " !!!"
 * 
 * dan keterangan array lainnya. Jd skrng cuma sekedar cetak isi `strings` tanpa menggunakan argumen yg diberikan (Yo, nama saya ${nama} dengan NPM ${npm} !!!).
 * 
 * Kesimpulannya di sini adlh ketika kita menjalankan template literal ini, tag template (fungsi coba) akan memecah isi dlmnya dgn delimiternya adlh expression, yaitu ${nama} dan ${npm}, dan disimpan ke dlm parameter pertama (strings)
 * 
 * Klo mw tangkap expression pertama, maka argumen fungsi coba menjadi `coba(strings, nama)`
 * 
 * Klo mw tangkap expression kedua, maka argumen fungsi coba menjadi `coba(strings, nama, npm)`
 * 
 * Krn kita gk tw seberapa bnyk argumen yg dikirimkan, jd pkk rest parameters untuk menangkap semua expression dr string literal yg dijadikan argumen untuk fungsi tag template ini, yaitu `coba(strings, ...args)`
 * 
 */



// function coba(strings, ...args) {
//     let result = '';

//     result.forEach((str, indeks) => {
//         // result += `${ str }${ args[indeks] }`; // 'Yo, nama saya Saiful dengan NPM 19062 !!!undefined' di akhirnya ada undefined krn wkt dia looping sbnyk 3 kali (bnyk string yg dipecah), pada iterasi terakhir gk ada args[2]. Bs kita akali pkk operator ternary atw lngsng pkk operator or ( || )
//         result += `${ str }${ args[indeks] || ''}`;
//     });

//     return result;
// }

// const str = coba`Yo, nama saya ${nama} dengan NPM ${npm} !!!`;



// function coba(strings, ...args) {
//     return strings.reduce((result, ekspresi, i) => `${result}${ekspresi}${args[i] || ''}`, '');
// }

// const str = coba`Yo, nama saya ${nama} dengan NPM ${npm} !!!`;



// Cnth kasusnya misalkan kita fetch data dr API, lalu kita ingin menampilkan nama dan NPM nya menggunakan highlight

function highlight(strings, ...args) {
    return strings.reduce((result, ekspresi, i) => `${result}${ekspresi}<span style="background-color: salmon">${args[i] || ''}</span>`, '');
}

const str = highlight`Yo, nama saya ${nama} dengan NPM ${npm} !!!`;

document.body.innerHTML += str;