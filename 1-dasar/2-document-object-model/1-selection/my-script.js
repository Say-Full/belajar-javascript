// getElementById() --> return element

// const judulPertama = document.getElementById("judul");
// judulPertama.style.color = 'red';
// judulPertama.style.backgroundColor = '#ccc';
// judulPertama.innerHTML = 'Ini bukan judul';

// console.log(judulPertama)





// getElementsByTagName() --> return HTML Collection

// const p = document.getElementsByTagName('p');
// p[2].style.backgroundColor = 'lightblue';

// for( let i = 0; i < p.length; i++ ) {
//     p[i].style.backgroundColor = 'lightgreen';
// }





// getElementsByClassName() --> return HTML Collection

// const p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = "Tes";

// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = "Tes";





// querySelector() --> return element

// const p4 = document.querySelector("#b p");
// p4.style.color = 'yellow';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(4)'); // nth-child dimulai dr 1
// li2.style.backgroundColor = 'blue';

// const p = document.querySelector('p'); // Yg dikembalikan hanya yg pertama kali ditemukan





// querySelectorAll() --> return nodeList

// const p = document.querySelectorAll('p');

// for( let i = 0; i < p.length; i++ ) {
//     p[i].style.backgroundColor = 'lightblue';
// }





// Ubah node root

// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// p4.style.backgroundColor = 'purple';

// const sectionB = document.querySelector('section#b');
// const p4 = sectionB.getElementsByTagName('p')[0];
// p4.style.backgroundColor = 'black';