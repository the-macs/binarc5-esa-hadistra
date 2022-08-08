require('dotenv').config()

const port = 3000

const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const session = require('express-session')

const { MemoryStore } = require('express-session')
const sessionStorage = new MemoryStore()

const commonRoute = require('./src/routes/common.route')
const userRoute = require('./src/routes/user.route')

const apiUserRoute = require('./src/routes/api/user.route')

const secret = 'jakut-klonop-2022'


// Untuk return json / API
// app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.set('view engine', 'ejs')
app.use(express.static('public'))

app.set('views', './src/views')

app.use(expressLayouts)


app.use(session({
    secret: process.env.SESSION_SECRET || secret, // salt
    resave: false,
    store: sessionStorage,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 60 * 10000
    }
}))

// Route User
app.use(commonRoute)
app.use(userRoute)

app.use(apiUserRoute)

// Running Server
app.listen(process.env.PORT || port, () => {
    console.log('Server Running ...')
})