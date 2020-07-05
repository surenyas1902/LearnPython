const express = require('express')
const path = require('path')
const http = require('http')
const socketIO = require('socket.io')
const Filter = require('bad-words')
const { generateMessage } = require('./utils/messages')

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

const port = process.env.PORT || 3000
const publicPath = path.join(__dirname, '../public')

app.use(express.static(publicPath))

io.on('connection', (socket) => {
    console.log('New WebSocket connection')
    const message = "Welcome to the Chat App!!";

    socket.emit('welcomemessage', generateMessage(message)) // Emit only particular current connection
    socket.broadcast.emit('welcomemessage', generateMessage('New user is joined')) // Emit to everyone except me.

    socket.on('sendMessage', (message, callback) => {
        const filter = new Filter()
        if (filter.isProfane(message)) {
            return callback('Profanity is not allowed')
        }
        io.emit('receiveMessage', generateMessage(message)) // Emit to everybody
        callback()
    })

    socket.on('sendLocation', ( {lat, long}, callback )=> {
        socket.broadcast.emit("locationMessage", `https://google.com/maps?q=${lat},${long}`)
        callback('Location is Shared !!!')
    })

    socket.on('disconnect', () => { // When a connection disconnected
        io.emit('welcomemessage', generateMessage('User has left'))
    })
})

server.listen(port, () => {
    console.log(`Application running in port ${port}`)
})