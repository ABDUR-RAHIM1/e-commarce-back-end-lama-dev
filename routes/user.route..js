const User = require("../Models/User.model.");
const { veriifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require("./veriifyToken");



const router = require("express").Router()

router.put("/:id", verifyTokenAndAuth, async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString()
    }
    try {
        const user = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json({ user })
    } catch (error) {
        res.status(500).json({ error })
    }
})

// delete method 

router.delete("/:id", verifyTokenAndAuth, async (req, res) => {

    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("user has benn Deleted")


    } catch (error) {
        res.status(500).json(error)
    }
})


// get user by  id 

router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {

    try {
        const user = await User.findById(req.params.id)
        const { password, ...others } = user._doc
        res.status(200).json(others)


    } catch (error) {
        res.status(500).json(error)
    }
})




module.exports = router;