const mongoose = require('mongoose');

const Task = mongoose.model('Task', {
    descriptions: {
        type: String,
        required: true,
        trim:true
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
})

module.exports = Task