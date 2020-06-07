const mongoose = require('mongoose');

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim:true
    },
    IsCompleted: {
        type: Boolean,
        default: false
    }
})

module.exports = Task