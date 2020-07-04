const express = require('express')
const path = require('path')
const http = require('http')
const socketIO = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

const port = process.env.PORT || 3000
const publicPath = path.join(__dirname, '../public')

app.use(express.static(publicPath))

io.on('connection', (socket) => {
    console.log('New WebSocket connection')
    const message = "Welcome to the Chat App!!";
    socket.emit('welcomemessage', message ) // Emit only particular current connection
    socket.broadcast.emit('welcomemessage', 'New user is joined') // Emit to everyone except me.
    socket.on('sendMessage', (message) => {
        console.log(message);
        io.emit('receiveMessage', message) // Emit to everybody
    })

    socket.on('disconnect', () => { // When a connection disconnected
        io.emit('welcomemessage', 'User has left')
    })
})

server.listen(port, () => {
    console.log(`Application running in port ${port}`)
})