const { MongoClient } = require('mongodb');
const ObjectID = require('mongodb').ObjectID;

const uri = 'mongodb://127.0.0.1:27017';
const dbName = 'tesdb';

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

client.connect((error, client) => {
    if( error ) {
        return console.log('Koneksi gagal!');
    }

    // Pilih database
    const db = client.db(dbName);  // Klo database nya blm ada, akan dibuatkan yg baru

    // Menambahkan sebuah data
    // db.collection('mahasiswa').insertOne(
    //     {
    //         nama: 'Saiful',
    //         npm: '19062'
    //     },
    //     (error, result) => {
    //         if( error ) {
    //             return console.log('Gagal menambahkan mahasiswa!');
    //         }

    //         console.log(result);
    //     }
    // );
    


    // Menambahkan lbh dr satu data
    // db.collection('mahasiswa').insertMany(
    //     [
    //         {
    //             nama: 'Saiful',
    //             npm: '19062'
    //         },
    //         {
    //             nama: 'Sani',
    //             npm: '19022',
    //             noHp: '085277770088'
    //         }
    //     ],
    //     (error, result) => {
    //         if( error ) {
    //             return console.log('Gagal menambahkan mahasiswa!');
    //         }

    //         console.log(result);
    //     }
    // );



    // Membaca semua data yg ada di dlm collection 'mahasiswa'
    // console.log(db.collection('mahasiswa').find()); // Ditampilkan datanya dlm bentuk cursor
    
    // console.log(
    //     db
    //         .collection('mahasiswa')
    //         .find()
    //         .toArray((error, result) => {
    //             console.log(result);
    //         })
    // ); 


    // Menampilkan data berdasarkan kriteria
    // console.log(
    //     db
    //         .collection('mahasiswa')
    //         .find({ nama: 'Saiful' })
    //         .toArray((error, result) => {
    //             console.log(result);
    //         })
    // ); 

    // console.log(
    //     db
    //         .collection('mahasiswa')
    //         .find({ _id: ObjectID('654cb2e6242c3c1ff4937599') })
    //         .toArray((error, result) => {
    //             console.log(result);
    //         })
    // ); 




    // Mengubah sebuah data
    // db.collection('mahasiswa').updateOne(
    //     {
    //         _id: ObjectID('654cb2e6242c3c1ff4937599')
    //     },
    //     {
    //         $set: {
    //             npm: '19099'
    //         }
    //     }
    // ); // Akan menggantung tdk memberikan konfirmasi apa-apa krn dlm bentuk promise. Blh simpan proses ini ke dlm suatu variabel atw pkk method chaining

    // const updatePromise = db.collection('mahasiswa').updateOne(
    //     {
    //         _id: ObjectID('654cb2e6242c3c1ff4937599')
    //     },
    //     {
    //         $set: {
    //             npm: '19097'
    //         }
    //     }
    // );

    // updatePromise.then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });



    // Mengubah banyak data
    // const updatePromise = db.collection('mahasiswa').updateMany(
    //     {
    //         nama: 'Saiful'
    //     },
    //     {
    //         $set: {
    //             nama: 'Saifullah'
    //         }
    //     }
    // );

    // updatePromise.then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });



    // Menghapus sebuah data
    // db.collection('mahasiswa').deleteOne(
    //     {
    //         _id: ObjectID('654cb2e6242c3c1ff4937599')
    //     }
    // ).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });



    // Menghapus lebih dari sebuah data
    db.collection('mahasiswa').deleteMany(
        {
            nama: 'Sani'
        }
    ).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });



});



