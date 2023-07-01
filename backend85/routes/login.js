const express = require('express')
const User = require("../models/users")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const router = express.Router()



// login user

router.post('/login', (req, res) => {
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    Error: "something want worng with email"
                })
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (!result) {
                    res.status(401).json({
                        err: 'incorrect password'
                    })
                }
                if (result) {
                    const token = jwt.sign({
                        first_name: user[0].first_name,
                        last_name: user[0].last_name,
                        email: user[0].email,


                    },
                        'this is dummy text',
                        {
                            expiresIn: "24h"
                        }
                    );
                    return res.status(200).json({
                        first_name: user[0].first_name,
                        last_name: user[0].last_name,
                        email: user[0].email,
                        token: token

                    })
                }

            })

        })
        .catch(err => {
            res.status(500).json({
                err: "something want wrong"
            })
        })

})

module.exports = router;