const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true  
    },
    score: {
        type: Number,
        required: true  
    }
});

const dbModel = mongoose.model('users', usersSchema);

module.exports = dbModel;