const express = require('express')
require('./db/mongoose')
const User = require('./models/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (req, res) => {
    const newUser = new User(req.body);
    newUser.save().then((result) => {
        res.status(200)
        res.send(newUser)
    }).catch( (error) => {
        res.status(400).send(error)
    })
})

app.listen(port, () => {
    console.log("Server started on "+port)
})