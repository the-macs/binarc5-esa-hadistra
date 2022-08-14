const secret = 'jakut-klonop-2022'
const jwt = require('jsonwebtoken')


module.exports = {
    getCurrentUser: (cookiesToken) => {
        const token = jwt.verify(cookiesToken, secret);

        return token
    }
}