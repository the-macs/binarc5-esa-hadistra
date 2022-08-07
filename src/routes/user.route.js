const express = require('express')
const { MemoryStore } = require('express-session')
const session = require('express-session')
const router = express.Router()

const userController = require('./../controllers/user.controller')

const sessionStorage = new MemoryStore()

const authMiddleware = require('./../middlewares/auth.middleware')

router.use(session({
    secret: 'esa', // salt
    resave: false,
    store: sessionStorage,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 60 * 10000
    }
}))

// Authentication
router.get('/login', authMiddleware.isGuest, userController.login)

router.post('/auth', authMiddleware.isGuest, userController.auth)

router.post('/logout', authMiddleware.isAuthenticated, userController.logout)

// Registrasi
router.get('/sign-up', authMiddleware.isGuest, userController.signup)

router.post('/sign-up', authMiddleware.isGuest, userController.register)

// User Setup
router.put('/setting/:id', authMiddleware.isAuthenticated, userController.updateUser)

router.get('/setting', authMiddleware.isAuthenticated, userController.setting)

module.exports = router