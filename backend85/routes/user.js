const ex = require('express')
const router = ex.Router()
const bcrypt = require('bcrypt')
const Users = require('../models/users.js')
const { json } = require('body-parser')






// get all user 

/* router.get('/test', async (req, res) => {
    try {
        const user = await User.find()
        return res.status(200).json(user)
    } catch (err) {
        return res.status(400).json({
            err: "somethin went worng"
        })

    }

}) */



//get single user

/* router.get('/getAll/:Id', (req, res) => {
    try {
        const user = User.findById(req.params.Id)
        return res.status(200).json(user)
    } catch (err) {
        return res.status(400).json({
            err: "something went wrong"
        })
    }
}) */


router.post('/', async (req, res) => {
    // Website you wish to allow to connect
    const { password, password_confirmation } = req.body

    if (password !== password_confirmation) {
        throw new Error('Password do not match')
    }

    const isExisting = await Users.findOne({ email: req.body.email })
    if (isExisting) {
        throw new Error("User alrady exist. Try a different email")
    }

    try {
        const hashpassword = await bcrypt.hash(req.body.password, password_confirmation, 10)
        const newuser = await Users.create({ ...req.body, password: hashpassword })
        return res.status(200).json(newuser)
    } catch (err) {
        return res.json(err)
    }
    




})



router.post('/update-user', async (req, res) => {
    try {
        const user = await user.findOneAndUpdate(req.body)
        return res.status(200).json(user)
    } catch (err) {
        return res.status(500).json({
            err: err
        })
    }
})




module.exports = router;







