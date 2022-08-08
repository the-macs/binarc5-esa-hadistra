require('dotenv').config()

const port = 3000

const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()

const commonRoute = require('./src/routes/common.route')
const userRoute = require('./src/routes/user.route')

const apiUserRoute = require('./src/routes/api/user.route')


// Untuk return json / API
// app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.set('view engine', 'ejs')
app.use(express.static('public'))

app.set('views', './src/views')

app.use(expressLayouts)

// Route User
app.use(userRoute)
app.use(commonRoute)

app.use(apiUserRoute)

// Running Server
app.listen(process.env.PORT || port, () => {
    console.log('Server Running ...')
})