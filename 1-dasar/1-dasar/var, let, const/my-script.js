// var i = 10;
// console.log(i); // '10'



// console.log(i); // 'undefined' krn JS pkk konsep hoisting
// var i = 10;





// i = 10;
// console.log(i); // 10



// console.log(i); // ReferenceError: i is not defined
// i = 10;





// console.log(i); // ReferenceError: Cannot access 'i' before initialization
// let i = 10; // Samain pembuatan variabelnya kyk bhs pemrograman lain
// const i = 10;





// for( var i = 0; i < 10; i++ ) {
//     console.log(i); // 0, 1, ..., 9
// }

// console.log(i); // '10' krn JS menganut Function Scope



// for( let i = 0; i < 10; i++ ) {
//     console.log(i); // 0, 1, ..., 9
// }

// console.log(i); // ReferenceError: i is not defined





// function tes() {
//     for( var i = 0; i < 10; i++ ) { console.log(i); }
// }

// tes();

// console.log(i); // ReferenceError: i is not defined



// (function() {
//     for( var i = 0; i < 10; i++ ) { 
//         console.log(i); // 1, 2, ..., 9
//     }

//     // Lanjut penulisan kode program punya ktia
// }());

// console.log(i); // ReferenceError: i is not defined
