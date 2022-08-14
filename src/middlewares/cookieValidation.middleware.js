module.exports = {
    validateCookie: (req, res, next) => {
        if ('session_id' in req.cookies) {
            console.log('Session ID Exist')
            if (req.cookies.session_id == '1234') next()
            else res.sendStatus(403)
        } else {
            res.sendStatus(403)
        }
    }
}