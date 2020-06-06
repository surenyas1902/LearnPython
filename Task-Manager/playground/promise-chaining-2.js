require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5ed9bc989bc0579dc2fec1c9').then((tasks) => {
    console.log(tasks)
    return Task.countDocuments({isCompleted: false})
}).then((result) => {
    console.log(result)
})
.catch((error) => {
    console.log(error)
})