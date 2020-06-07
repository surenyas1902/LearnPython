const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', async (req, res) => {
    const newUser = new User(req.body);
    try{
        await newUser.save()
        res.status(201).send(newUser)
    }
    catch(e) {
        res.status(400).send(e)
    }
})

app.get('/users', async (req, res) => {

    try{
        const users = await User.find({})
        res.send(users)
    }
    catch (e) {
        res.status(500).send(e)
    }
})

app.get('/users/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const user = await User.findById(_id);
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    }
    catch(e) {
        res.status(500).send(e)
    }
})

app.patch('/users/:id', async (req, res) => {
    const allowedUpdates = ['name', 'email', 'password', 'age']
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    }
    catch(e) {
        res.status(500).send(e)
    }
})

app.post('/tasks', async (req, res) => {
    const newTask = new Task(req.body)
    try {
        await newTask.save()
        res.status(201).send(newTask)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({})
        if (!tasks) {
            res.status(404).send('Data Not found')
        }
        res.send(tasks)
    }
    catch(error) {
        res.status(500).send(error)
    }
})

app.get('/tasks/:id', async (req,res) => {
    const _id = req.params.id;
    try {
        const task = await Task.findById(_id)
        if (!task) {
            res.status(404).send('Data Not found')
        }
        res.send(task)
    }
    catch (error) {
        res.status(500).send(error)
    }
})

app.listen(port, () => {
    console.log("Server started on "+port)
})