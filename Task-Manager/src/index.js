const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (req, res) => {
    const newUser = new User(req.body);
    newUser.save().then((result) => {
        res.status(201).send(newUser)
    }).catch( (error) => {
        res.status(400).send(error)
    })
})

app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.send(users)
    }).catch((error) => {
        res.status(500).send(error)
    })
})

app.get('/users/:id', (req, res) => {
    const _id = req.params.id;
    User.findById(_id).then((user)=> {
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    }).catch((error) => {
        res.status(500).send(error)
    })
})

app.post('/tasks', (req, res) => {
    const newTask = new Task(req.body)
    newTask.save().then((result) => {
        res.send(newTask)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.get('/tasks', (req, res) => {
    Task.find({}).then((result) => {
        if (!result) {
            res.status(404).send('Data Not found')
        }
        res.send(result)
    }).catch((error) => {
        res.status(500).send(error)
    })
})

app.get('/tasks/:id', (req,res) => {
    const _id = req.params.id;
    Task.findById(_id).then((result) => {
        if (!result) {
            res.status(404).send('Data Not found')
        }
        res.send(result)
    }).catch((error) => {
        res.status(500).send(error)
    })
})

app.listen(port, () => {
    console.log("Server started on "+port)
})