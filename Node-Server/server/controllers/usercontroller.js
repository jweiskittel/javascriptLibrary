var express = require('express')
var router = express.Router()
var sequelize = require('../db')
var User = sequelize.import('../models/user')
var jwt = require('jsonwebtoken')
var bcrypt = require('bcryptjs')

router.post('/createuser', (req, res) => {
    var username = req.body.user.username
    var pass = req.body.user.password

    User.create({
        username: username,
        passwordhash: bcrypt.hashSync(pass, 10)
    }).then(
        createSuccess = (user) => {
            var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24})
            res.json({
                user: user,
                message: 'created',
                sessionToken: token
            })
        },
        createError = (err) => {
            res.send(500, err.message)
        }
    )
})

router.post('/signin', (req, res) => {
    User.findOne( { where: { username: req.body.user.username }})
    .then(user => {
            if (user) {
                bcrypt.compare(req.body.user.password, user.passwordhash, (err, matches) => {
                    if (matches) {
                        let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24})
                        res.json({
                            user: user,
                            message: 'successfully authenticated',
                            sessionToken: token
                        })
                    } else {
                        res.status(502).send({ error: 'You failed yo'})
                    }
                })
            } else {
                res.status(500).send({error: 'failed to authenticate'})
            }
        },
        (err) => {res.status(501).send({ error: 'You failed yo'})}
    )
})

module.exports = router