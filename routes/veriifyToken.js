const jwt = require('jsonwebtoken')

const veriifyToken = async (req, res, next) => {
    const accessToken = req.headers.token;
    if (accessToken) {
        const token = accessToken.split(" ")[1]
        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.status(403).json({ massage: "Token is not Valid" })
            }
            req.user = user;
            next()
        })
    } else {
        return res.status(401).json({ massage: "You are not authenticated" })
    }
}


const verifyTokenAndAuth = (req, res, next) => {
    veriifyToken(req, res, () => {
        if (req.user.id === req.params.id || user.isAdmin) {
            next()
        } else {
            res.status(403).json({ massage: "You are not allowed to do that" })
        }
    })
}



/// verify tokn and admin 


const verifyTokenAndAdmin = (req, res, next) => {
    veriifyToken(req, res, () => {
        if ( user.isAdmin) {
            next()
        } else {
            res.status(403).json({ massage: "You are not allowed to do that" })
        }
    })
}



module.exports = { veriifyToken, verifyTokenAndAuth, verifyTokenAndAdmin }