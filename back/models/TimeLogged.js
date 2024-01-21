const mongoose = require('mongoose');

const TimeLoggedSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // Use the correct model name 'User'
    },
    time: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('TimeLogged', TimeLoggedSchema);
