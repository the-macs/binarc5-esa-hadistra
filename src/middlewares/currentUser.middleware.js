
const jwt = require('jsonwebtoken')
// const secret = 'jakut-klonop-2022'

module.exports = {
    getCurrentUser: (req, res, next) => {
        // if ('session_id' in req.cookies) {
        //     console.log('Session ID Exist')
        //     if (req.cookies.session_id == '1234') next()
        //     else res.sendStatus(403)
        // } else {
        //     res.sendStatus(403)
        // }

        if (!req.user) next()

        try {
            const verify = jwt.verify(req.cookies.token, process.env.SESSION_SECRET)
            req.user = verify
        } catch (error) {
            res.redirect('/')
        }




        // const token = req.header['authorization']

        // if (token == undefined) return next()

        // try {
        //     // const verify = jwt.verify(token, secret)
        //     // req.user = verify

        //     next()
        // } catch (err) {

        //     // req.session.destroy()
        //     // delete req.header['authorization']
        //     res.redirect('/')
        // }

        // next()
    }
}


// const validateCookie = (req, res, next) => {
//     if ('session_id' in req.cookies) {
//         console.log('Session ID Exist')
//         if (req.cookies.session_id == '1234') next()
//         else res.sendStatus(403)
//     } else {
//         res.sendStatus(403)
//     }
// }