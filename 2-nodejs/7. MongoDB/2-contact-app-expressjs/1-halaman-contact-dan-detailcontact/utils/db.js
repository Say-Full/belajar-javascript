const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/dbbaru', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}); // 'dbbaru' adlh nama database. Klo database nya blm ada, akan dibuatkan yg baru



// Membuat skema untuk collection yg bernama 'Contact' (di database akan diberi nama 'contacts')
// Biar lbh rapi, pindahin ke dlm file ../models/contact.js supaya setiap model skema dijadikan satu file
// const Contact = mongoose.model('Contact', {
//     nama: {
//         type: String,
//         required: true
//     },
//     npm: {
//         type: String,
//         required: true
//     },
//     noHp: String
// });



// Menambah satu data
// const contact1 = new Contact({
//     nama: 'Sani',
//     npm: '19022',
//     noHp: '085277770088'
// });

// contact1.save().then((result) => console.log(result));