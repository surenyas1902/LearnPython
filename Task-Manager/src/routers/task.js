const express = require('express')
const router = express.Router()
const Task = require('../models/task')

router.post('/tasks', async (req, res) => {
    const newTask = new Task(req.body)
    try {
        await newTask.save()
        res.status(201).send(newTask)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

router.get('/tasks', async (req, res) => {
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

router.get('/tasks/:id', async (req,res) => {
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

router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'IsCompleted']
    const isOk = updates.every((update) => allowedUpdates.includes(update))
    if (!isOk) {
        return res.status(400).send('Bad Request or Invalid Body')
    }
    try {
        const taskUpdate = await Task.findById(req.params.id);
        updates.forEach((update) => taskUpdate[update] = req.body[update]);
        await taskUpdate.save();
        //const taskUpdate = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        if (!taskUpdate) {
            res.status(400).send('Data Not found')
        }
        res.send(taskUpdate)
    }
    catch(error) {
        res.status(500).send(error)
    }

})

router.delete('/tasks/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const task = await Task.findByIdAndDelete(_id);
        if (!task) {
            return res.status(400).send('Invalid Data')
        }
        res.send(task)
    }
    catch(error) {
        res.status(500).send(error)
    }
})

module.exports = router