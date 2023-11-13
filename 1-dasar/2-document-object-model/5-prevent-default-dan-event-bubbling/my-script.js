// const tombolClose = document.querySelectorAll('.close');
// const cards = document.querySelectorAll('.card');

// tombolClose.forEach(function(tombol) {
//     tombol.addEventListener('click', function(event) {
//         event.target.parentElement.style.display = 'none';
//         event.preventDefault(); // Menghentikan aksi default dr sebuah elemen, seperti aksi default dr tag a
//         event.stopPropagation(); // Tanpa ini, akan dimunculkan alert terlebih dahulu krn tombol close dibungkus di dlm elemen card. Setelah ditekan oke di alert-nya baru dijalankan event tombol close ini. Klo pkk ini, maka khusus ketika ditekan tombol close, maka hanya jlnkan event untuk tombol close saja.
//     });
// });

// cards.forEach(function(card) {
//     card.addEventListener('click', function(e) {
//         alert('OK');
//     });
// });





// Klo ditambah elemen baru secara manual (real-time) seperti ditulis lngsng di browser, maka elemen trsbt blm punya event.
// Jd, simpan event nya di container.
const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
    if( e.target.className == 'close' ) {
        e.target.parentElement.style.display = 'none';
        // e.preventDefault();
    }
});