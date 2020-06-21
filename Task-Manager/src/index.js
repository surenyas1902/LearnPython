const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const bcrypt = require('bcryptjs')
const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if(req.method ==="GET"){
//         res.status(503).send("Server Maintenance. Please try again some time.")
//     }
//     else{
//         next()
//     }
// }); //Applying Middleware for API Request

// app.use((req, res, next) => {
//     res.status(503).send("Server Maintenance. Please try again some time.")
// })

app.use(express.json()) //Parsing Body to JSON.
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log("Server started on "+port)
})

const jwt = require('jsonwebtoken');
const myFunction = async () => {
    const token = jwt.sign({_id:'abcd1234'},'thisisthetoken', { expiresIn: '1 hours'})
    console.log(token);
    const data = jwt.verify(token, 'thisisthetoken');
    console.log(data);
}

myFunction()