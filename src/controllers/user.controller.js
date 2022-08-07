const { v4: uuidv4 } = require('uuid')
const users = require('./../models/users.model')

module.exports = {
    login: (req, res) => {
        res.render('login', {
            layout: 'layouts/_main-layout',
            title: 'User Login',
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
            layout: 'layouts/_main-layout',
            title: 'User Register',
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
        const _id = req.body._id
        users.filter((user) => {
            if (user.id == _id) {
                user.id = _id
                user.name = req.body.name
                if (req.body.password != '')
                    user.password = req.body.password

                req.session.user = user

                return user
            }
        })

        res.redirect('/')
    },
    setting: (req, res) => {
        res.render('setting', {
            layout: 'layouts/_main-layout',
            title: 'User Setting',
            user: req.session.user
        })
    }
}