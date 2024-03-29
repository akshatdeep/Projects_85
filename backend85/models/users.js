const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const User = mongoose.Schema({
    first_name: {
        type: String,
        require: true
    },

    last_name: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true
    },

    password: {
        type: String,
        require: true
    },

    password_confirmation: {
        type: String,
        require: true
    }
})


User.pre('create', async function (next) {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(this.password, salt)
        this.password = hashedPassword
        next()
    } catch (error) {
        next(error)
    }
})



module.exports = mongoose.model('users', User)