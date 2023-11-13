// const coba = new Promise(resolve => resolve('selesai'));
// console.log(coba); // 'Promise {<resolved>: "selesai"}'



// const coba = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('Selesai');
//     }, 2000);
// });
// console.log(coba); // 'Promise {<pending>}' krn kita jalaninya secara synchronous



// const coba = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('Selesai');
//     }, 2000);
// });
// coba.then( () => console.log(coba) ); // Nunggu dlu selama 2 detik baru dicetak 'Promise {<resolved>: "selesai"}'





// Pkk async dan await
// function cobaPromise() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Selesai');
//         }, 2000);
//     });
// }

// const coba = cobaPromise();
// console.log(coba); // 'Promise {<pending>}'
// coba.then( () => console.log(coba) ); // Nunggu dlu selama 2 detik baru dicetak 'Promise {<fulfilled>: 'Selesai'}'
// coba.then( coba => console.log(coba) ); // Nunggu dlu selama 2 detik baru dicetak 'selesai'


// Untuk pkk async dan await, hrs buat function baru untuk memanggil function cobaPromise
// function cobaAsync() {
//     const coba = cobaPromise();
//     console.log(coba);
// }

// cobaAsync(); // 'Promise {<pending>}'



// async function cobaAsync() {
//     const coba = await cobaPromise();
//     console.log(coba);
// }

// cobaAsync(); // Nunggu dlu selama 2 detik baru dicetak 'selesai'




// Contoh pakai reject
function cobaPromise() {
    return new Promise( (resolve, reject) => {
        const waktu = 6000;
        
        if( waktu < 5000 ) {
            setTimeout(() => {
                resolve('Selesai');
            }, waktu);
        } else {
            reject('Kelamaan');
        }
    } );
}

// const coba = cobaPromise();
// coba
//     .then( coba => console.log(coba) )
//     .catch( coba => console.log(coba) ); // Program berhenti (Paused on promise rejection), tdk dicetak ke dlm console.log, tp diberikan keterangan mslhnya di dlm Local > Exception adlh 'Kelamaan'



// Klo pkk async dan await gk bs pkk `.then()` dan `.catch()` krn fungsi ini seolah-olah synchronous dan yg dijalani cuma wkt resolve. Jd pkk try untuk resolve dan catch untuk reject
async function cobaAsync() {
    try {
        const coba = await cobaPromise();
        console.log(coba);
    } catch(err) {
        console.error(err); // Program berhenti (Paused on promise rejection), tdk dicetak ke dlm console.log, tp diberikan keterangan mslhnya di dlm Local > Exception adlh 'Kelamaan'

    }
}

cobaAsync();