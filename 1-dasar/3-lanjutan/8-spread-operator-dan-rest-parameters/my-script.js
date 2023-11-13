// Spread Operator

// const mahasiswa = ['Saiful', 'Sani'];

// console.log(...mahasiswa); // 'Saiful Sani'
// console.log(...mahasiswa[1]); // 'S' 'a' 'n' 'i'

// const dosen = ['Alim', 'Husaini'];

// const bimbingan = [...mahasiswa, ...dosen]; // sama dengan `mahasiswa.concat(dosen);` tp spread operator lbh fleksibel krn bs tambahin elemen baru

// const bimbingan = [...mahasiswa, 'Liya', ...dosen];

// console.log(bimbingan); // Array baru yg berupa array dosen ditambahkan di bagian akhir dr array mahasiswa



// Copy Array

// const mahasiswa = ['Saiful', 'Sani'];
// const mhs1 = mahasiswa; // Array mhs1 berisi sama dgn array mahasiswa. Klo isi array mhs1 diubah, maka akan mengubah isi array mahasiswa. Ini bkn copy array, tp referensi tmpt objek array disimpan di dlm memori yg di-copy ke mhs1

// const mhs1 = [...mahasiswa];





// Memanipulasi huruf dari sebuah nama

// const nama = document.querySelector('.nama');
// const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');

// nama.innerHTML = huruf;




// Rest Parameters

function filteringBy(type, ...values) {
    return values.filter(value => typeof(value) === type); // Berupa Array

}

console.log(filteringBy('number', 1, 2, 'Tes', false, 700));