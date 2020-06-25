const express = require('express');
const router = express.Router()
const auth = require('../middleware/auth');
const User = require('../models/user');
router.post('/users', async (req, res) => {
    const newUser = new User(req.body);
    try{
        await newUser.save()
        const token = await newUser.generateAuthToken()
        res.status(201).send({newUser, token})
    }
    catch(e) {
        res.status(400).send(e)
    }
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken()
        res.send({user, token});
    } catch(e) {
        res.status(400).send()
    }
})

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token;
        })
        await req.user.save();
        res.send();
    }
    catch(e) {
        res.status(500).send();
    }
})

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = [];
        await req.user.save();
        res.send();
    }
    catch(e) {
        res.status(500).send();
    }
})

router.get('/users/me', auth ,async (req, res) => {
    res.send(req.user)
})

router.get('/users/:id', async (req, res) => {
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

router.patch('/users/me',auth,  async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation) {
        return res.status(400).send({error: "Invalid Update"})
    }
    try {
        updates.forEach((update) => req.user[update] = req.body[update]);
        await req.user.save();
        //const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        res.send(user)
    }
    catch(e) {
        res.status(500).send(e)
    }
})

router.delete('/users/me', auth, async (req, res) => {
    const _id = req.user._id;
    try {
        // const user = await User.findByIdAndDelete(_id)
        // if (!user) {
        //     return res.status(400).send()
        // }
        await req.user.remove()
        res.send(req.user)
    }
    catch(error) {
        return res.status(500).send(error)
    }
})

module.exports = router