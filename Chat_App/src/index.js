const express = require('express')
const path = require('path')
const http = require('http')
const socketIO = require('socket.io')
const Filter = require('bad-words')
const { generateMessage, generateLocMessage } = require('./utils/messages')

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

const port = process.env.PORT || 3000
const publicPath = path.join(__dirname, '../public')

app.use(express.static(publicPath))

// socket.emit -> Emits the data only for the particular connection
// socket.broadcast.emit -> Emits to Everyone except me in all chat rooms
// io.emit -> Emits to everyone including me in all chat rooms
// io.to.emit -> Emits to everyone including me in the Particular chatroom
// socket.broadcast.to.emit -> Emits to everyone except me in the Particular Chatroom


io.on('connection', (socket) => {
    console.log('New WebSocket connection')
    const message = "Welcome to the Chat App!!";

    socket.on('join', ( {username, room} ) => {
        socket.join(room)
        socket.emit('welcomemessage', generateMessage(message))
        socket.broadcast.to(room).emit('welcomemessage', generateMessage(`${username} has joined`))
    })

    socket.on('sendMessage', (message, callback) => {
        const filter = new Filter()
        if (filter.isProfane(message)) {
            return callback('Profanity is not allowed')
        }
        io.to('Arakkonam').emit('welcomemessage', generateMessage(message)) // Emit to everybody
        callback()
    })

    socket.on('sendLocation', ( {lat, long}, callback )=> {
        socket.broadcast.emit("locationMessage", generateLocMessage(`https://google.com/maps?q=${lat},${long}`))
        callback('Location is Shared !!!')
    })

    socket.on('disconnect', () => { // When a connection disconnected
        io.emit('welcomemessage', generateMessage('User has left'))
    })
})

server.listen(port, () => {
    console.log(`Application running in port ${port}`)
})