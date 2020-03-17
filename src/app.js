const path = require('path')
const express = require('express')
const geocode = require('./utils/geocode')

// Lecture 49 Advanced Templating
const hbs = require('hbs')

const app = express()

const publicDirectory = path.join(__dirname, '../public')

// Lecture 46: Customizing the views directory
// __dirname is the current folder, 2nd parameter is the path from there
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

// Lecture 49: make partial templates available to views
hbs.registerPartials(partialsPath)

// Setup handlebars engine and views location 
app.set('view engine', 'hbs')
app.set('views', viewsPath)

// Setup static directory to serve
app.use(express.static(publicDirectory))
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
        content: 'This is some helpful content',
        name: 'Vasile Gorcinschi'
    })
})


//app.com/weather
app.get('/weather', (req, res) => {
    const queryAddress = req.query.address

    if (!queryAddress) {
        return res.status(400).send({
            error: "You must provide an address"
        })
    }
    
    res.send({
        forecast: "Le temps est beau...",
        location: "Îles-des-Soeurs",
        address: queryAddress
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.status(400).send({
            error: "You must provide a search parameter"
        })
    }
    console.log(req.query)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Not what you\'re looking for',
        errorMessage: 'Help article not found',
        name: 'Vasile Gorcinschi'
    })
})

// 50 404 pages - it is mandatory that the 404 handler is last in the list
// render anything that wasn't matched thus far
app.get('*', (req, res)=> {
    res.render('404', {
        title: '404',
        errorMessage: 'Page not found',
        name: 'Vasile Gorcinschi'
    })
})

//bind to port
app.listen(3000, () => {
    console.log('Server is up on port 3000!')
})