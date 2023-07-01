const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    if (!req.headers.authrization)
        return res.status(403).json({
            err: "user not authrized. No token"
        })

    if (req.headers.authrization && req.headers.authrization.startsWith('Bearer ')) {
        const token = req.headers.authrization.split(' ')[1]
        jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
            if (err)
                return res.status(403).json({
                    msg: "Wrong or expired token."
                })

            else {
                res.user = data // an object with only the user id as its property
            } next()
        })
    } else {
        return res.status(403).json({
            msg: "not authrized. No token"
        })
    }
}

module.exports = verifyToken