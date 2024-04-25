"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

// Catch async-errors and send to errorHandler:
require('express-async-errors')

const User = require('../models/userModel')

// ------------------------------------------
// User
// ------------------------------------------
module.exports.User = {

    login: async (req, res) => {

        if (req.method == 'POST') {

            const { email, password } = req.body

        if (email && password) {

            const user = await User.findOne({ email: email, password: password })
            if (user) {

                // Set Session:
                req.session = {
                    user: {
                        id: user.id,
                        email: user.email,
                        password: user.password
                    }
                }
                // Set Cookie:
                if (req.body?.rememberMe) {
                    // Set Cookie maxAge:
                    req.sessionOptions.maxAge = 1000 * 60 * 60 * 24 * 3 // 3 Days
                }

                // res.status(200).send({
                //     error: false,
                //     result: user,
                //     session: req.session
                // })

                // Go to home page:
                res.redirect('/')

            } else {

                res.errorStatusCode = 401
                throw new Error('Login parameters are not true.')

            }

        } else {

            res.errorStatusCode = 401
            throw new Error('Email and Password are required.')

        }

        } else {

            res.render('loginForm', {
                user: req.session?.user
            })

        }

        

    },

    logout: async (req, res) => {
        // Set session to null:
        req.session = null
        res.status(200).send({
            error: false,
            message: 'Logout OK'
        })
    },
}

