require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5ed9bc989bc0579dc2fec1c9').then((tasks) => {
//     console.log(tasks)
//     return Task.countDocuments({isCompleted: false})
// }).then((result) => {
//     console.log(result)
// })
// .catch((error) => {
//     console.log(error)
// })

const deleteTaskandGetCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({IsCompleted: false})
    return count
}

deleteTaskandGetCount('5edc7911ef6b99b3ae32c932').then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})