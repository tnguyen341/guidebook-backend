const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let guidebook = new Schema({
    guidebook_description: {
        type: String
    },
});

module.exports = mongoose.model('Guidebook', guidebook);