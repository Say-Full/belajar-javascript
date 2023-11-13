const mongoose = require('mongoose');



const Contact = mongoose.model('Contact', {
    nama: {
        type: String,
        required: true
    },
    npm: {
        type: String,
        required: true
    },
    noHp: String
});

module.exports = Contact;