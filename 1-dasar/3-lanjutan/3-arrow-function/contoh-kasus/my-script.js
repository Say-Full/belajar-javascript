const box = document.querySelector('.box');

// Gk blh ubah jd Arrow Function krn dia gk punya konsep this
// box.addEventListener('click', function() {
//     // console.log(this); // Konteksnya adlh div dgn class box

//     this.classList.toggle('size'); // Nambahin klo class size blm ada dan hilangin klo class size dh ada'

//     // setTimeout(function() { // Krn kita pkk function, this ini berisi apapun yg ada di luarnya
//     //     this.classList.toggle('caption'); // Krn setTimeout dijlnkan ketika hoisting, maka posisinya ada di global

//     //     console.log(this); // Objek Window
//     // }, 600); // Tunggu 600 ms baru jalankan function ini

//     // Sblm ada Arrow Function bs akali dgn cara buat variabel sementara (that) di awal isi fungsi addEventListener (di atas this.classList.toggle('size');) yg diisi dgn `this` --> let that = this;



//     // Arrow Function
//     setTimeout(() => {
//         this.classList.toggle('caption');
//     }, 600);

//     // Dh siap sampe sini tp klo diklik lg, malah hilangin yg size dlu baru caption. Jd buat variabel swap
// });





box.addEventListener('click', function() {
    let satu = 'size';
    let dua = 'caption';

    if( this.classList.contains(satu) ) {
        // satu = temp;
        // satu = dua;
        // dua = temp;

        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});