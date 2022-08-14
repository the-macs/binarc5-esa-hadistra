const users = require('../models/users.model')
const jwt = require('jsonwebtoken')

const dataUsers = users.getUsers()

module.exports = {
    generateToken: (_id) => {
        const user = dataUsers.find((data) => data.id == _id)

        const token = jwt.sign(
            {
                _id: user.id,
                _name: user.name,
                _username: user.username,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '10m'
            }
        )

        return token;
    },
    getUserVerified: (token) => {
        if (token) {
            let verify = jwt.verify(token, process.env.JWT_SECRET)

            return verify
        }

        return false

    }
}
