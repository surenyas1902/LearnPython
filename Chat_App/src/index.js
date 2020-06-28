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
let count = 0

// server (emit) -> client (receive) -> countupdatedevent
// client (emit) -> server (receive) -> increment
io.on('connection', (socket) => {
    console.log('New WebSocket connection')
    socket.emit('countupdatedevent', count)
    socket.on('increment', () => {
        count++;
        //socket.emit('countupdatedevent', count) -> Socket.emit only emits the data to the particular connection
        io.emit('countupdatedevent', count) //-> io.emit emits the data to all the connections
    })
})

server.listen(port, () => {
    console.log(`Application running in port ${port}`)
})