const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

const publicDir = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine','hbs') //Setting a view engine to run
app.set('views', viewsPath) //Settings Views Path/Location.
hbs.registerPartials(partialsPath);

app.use(express.static(publicDir)) //For Static Html Paths for Static Websites.

app.get('', (req, res) => { // request and response
    res.render('index', {
        title:"Weather",
        name: "SurendiranS"
    }) // Name of the view to render
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About Me",
        name:"Surendiran.S"
    })
});

app.get('/help', (req, res) => {
    res.render('help', {
        message: "Please read the FAQ for the questions.",
        title: "Help",
        name: "Surendiran S"
    })
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