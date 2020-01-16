const path = require('path')
const express = require('express')

const app = express()

const publicDirectory = path.join(__dirname, '../public')

// Lecture 47: Advanced templating
// __dirname is the current folder, 2nd parameter is the path from there
const viewsPath = path.join(__dirname, "../templates")

app.use(express.static(publicDirectory))

// Setup handlebars engine and views location 
app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Vasile Gorcinschi'
    })
})

app.get('/about', (req, res)=> {
    res.render('about', {
        title: 'About me',
        name: 'Vasile Gorcinschi'
    })
})

app.get('/help', (req, res)=> {
    res.render('help', {
        title: 'Help page',
        name: 'Vasile Gorcinschi'
    })
})

//app.com/weather
app.get('/weather', (req, res) => {
    res.send({
        forecast: "Le temps est beau...",
        location: "Île-des-Soeurs"
    })
})

//bind to port
app.listen(3000, () => {
    console.log('Server is up on port 3000!')
})