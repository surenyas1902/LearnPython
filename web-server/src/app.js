const path = require('path')
const express = require('express')

const app = express()

const publicDir = path.join(__dirname,'../public')
app.use(express.static(publicDir))

app.get('', (req, res) => { // request and response
    res.send('<h1>Weather</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is raining',
        location:'Arakkonam'
    })
})

app.listen(3000, () => {
    console.log("Application Started on Port 3000")
})