const express = require('express')
const routerRoot = express()

const userRoute = require('./user.route')
const commonRoute = require('./common.route')
const apiUserRoute = require('./api/user.route')


routerRoot.use(userRoute)
routerRoot.use(commonRoute)
routerRoot.use(apiUserRoute)

module.exports = routerRoot