module.exports = {
    getCurrentUser: (req, res, next) => {
        if ('token' in req.cookies) {
            console.log('Session ID Exist')
            if (req.cookies.token == '1234') next()
            else res.sendStatus(403)
        } else {
            res.sendStatus(403)
        }
    }
}