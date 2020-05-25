const express = require('express')

const app = express()

app.get('', (req, res) => { // request and response
    res.send('<h1>Weather</h1>')
})

app.get('/help', (req, res) => {
    res.send([{
        name:'Surendiran S',
        age: 26
    },
    {
        name: 'Yaswanth K',
        age: 16
    }])
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
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