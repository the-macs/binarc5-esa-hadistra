const { getUserVerified } = require('./../utils/jtwToken.utils')


module.exports = {
    index: (req, res) => {
        const token = req.header['authorization']

        if (token) {
            const verify = getUserVerified(token)
            req.user = verify
        }

        res.render('index', {
            layout: 'index',
            user: req.user
        })
    }
}