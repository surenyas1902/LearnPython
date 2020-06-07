require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5ed9bcc01dc2df9df41ea3ec', {age : 20}).then((user) => {
//     return User.countDocuments({age: 20})
// }).then((result) => {
//     console.log(result)
// }).catch((c) => {
//     console.log(c)
// })

const updateAgeandAsync = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count;
}

updateAgeandAsync('5edc72c0dcf31a232e7839f4',18).then((count) => {
    console.log(count)
}).catch((err) => {
    console.log(err)
})