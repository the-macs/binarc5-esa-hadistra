module.exports = {
    index: (req, res) => {
        res.render('index', {
            layout: 'index',
            user: req.session.user
        })
    }
}