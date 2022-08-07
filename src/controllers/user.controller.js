const { v4: uuidv4 } = require('uuid')
const users = require('./../models/users.model')

module.exports = {
    login: (req, res) => {
        res.render('login', {
            layout: 'layouts/_main-layout',
            message: req.session.err
        })
    },
    auth: (req, res) => {
        const dataInput = {
            username: req.body.username,
            password: req.body.password
        }

        const user = users.find((data) => data.username == dataInput.username)

        if (user) {
            if (user.password == dataInput.password) {
                req.session.user = user
                res.redirect('/')
            } else {
                req.session.err = "Incorrect password"
                res.redirect('/login')
            }
        }
        else {
            req.session.err = "Username not found"
            res.redirect('/login')
        }
    },
    logout: (req, res) => {
        req.session.destroy()
        res.redirect('/')
    },
    signup: (req, res) => {
        res.render('signup', {
            layout: 'layouts/_main-layout'
        })
    },
    register: (req, res) => {
        const userRegistered = users.find((data) => data.username == req.body.username)

        if (userRegistered) {
            req.session.err = "Username already exist"
            res.redirect('/sign-up')
        }

        users.push({
            id: uuidv4(),
            ...req.body
        })

        res.redirect('/login')
    },
    updateUser: (req, res) => {

        res.send(req)
        // res.render('setting', {
        //     user: req.session.user
        // })
    },
    setting: (req, res) => {
        res.render('setting', {
            layout: 'layouts/_main-layout',
            user: req.session.user
        })
    }
}