const User = require("../Models/User.model.");
const router = require("express").Router()
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")
// register user 

router.post('/register', async (req, res) => {

    const newUser = await User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString()
    })

    try {
        const user = await newUser.save()
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
})

// login 

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        !user && res.status(401).json({ massege: "Wrong Crudentials" })

        const hashPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SECRET);
        const originalPassword = hashPassword.toString(CryptoJS.enc.Utf8)

        originalPassword !== req.body.password && res.status(401).json({ massege: "Wrong Crudentials" })

        /// jwt token 
        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        }, process.env.TOKEN_SECRET, {
            expiresIn: "3d",
        })

        const { password, ...others } = user._doc
        res.status(200).json({ ...others, accessToken })
    } catch (error) {

    }
})


module.exports = router;