// Inline HTML attribute = menambahkan atribut event handler dlm elemen HTML

// const p3 = document.querySelector('.p3');

// function ubahWarnaP3() {
//     p3.style.backgroundColor = 'lightblue';
// }
// Lalu, tambahkan onclick atau onClick pada HTML-nya. Ini sangat tdk disarankan
// onclick="ubahWarnaP3()"



// Element method

// function ubahWarnaP2() {
//     p2.style.backgroundColor = 'lightblue';
// }

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnaP2; // Jgn taruh () krn akan lngsng dijalankan function nya.



// addEventListener()

// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function() {
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const teksLiBaru = document.createTextNode('Item Baru');
//     liBaru.appendChild(teksLiBaru);
//     ul.appendChild(liBaru);
// });



// Event handler adlh cara lama dan klo mw berikan lbh dr satu perubahan, dia gk bs menambah perubahan baru melainkan menimpa yg dh ada, misalnya event onclick

// const p3 = document.querySelector('.p3');

// Pkk event listener hanya akan menjalankan method yg terakhir
// p3.onclick = function() {
//     p3.style.backgroundColor = 'lightblue';
// }

// p3.onclick = function() {
//     p3.style.color = 'red';
// }


// Pkk event listener bs menjalankan keduanya
// p3.addEventListener('click', function() {
//     p3.style.backgroundColor = 'lightblue';
// });

// p3.addEventListener('click', function() {
//     p3.style.color = 'red';
// });





// const p3 = document.querySelector('p[name=par-3]');

// p3.addEventListener('mouseenter', function() {
//     p3.style.backgroundColor = 'lightblue';
// });

// p3.addEventListener('mouseleave', function() {
//     const r = Math.round(Math.random() * 255);
//     const g = Math.round(Math.random() * 255);
//     const b = Math.round(Math.random() * 255);
//     p3.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
// });