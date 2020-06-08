const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log("Server started on "+port)
})

const bcrypt = require('bcryptjs')
const myFunction = async () => {
    const password= 'read1234!'
    const hashPwd = await bcrypt.hash(password, 250)
    console.log(password, hashPwd)
    const isValid = await bcrypt.compare(password, hashPwd)
    console.log(isValid)
}

myFunction()