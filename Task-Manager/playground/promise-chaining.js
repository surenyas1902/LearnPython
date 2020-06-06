require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('5ed9bcc01dc2df9df41ea3ec', {age : 20}).then((user) => {
    return User.countDocuments({age: 20})
}).then((result) => {
    console.log(result)
}).catch((c) => {
    console.log(c)
})