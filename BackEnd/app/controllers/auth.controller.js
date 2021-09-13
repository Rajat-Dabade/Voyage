const jwt = require('jsonwebtoken');
const config = require('../config/auth.config');
const db = require('../models');
const {Op} = require('sequelize');

const User = db.user;
const Role = db.role;

exports.signup = (req, res) => {
    User.create({
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        surname: req.body.surname,
        emailId: req.body.emailId,
        mobileNumber: req.body.mobileNumber,
        panCardNumber: req.body.panCardNumber,
        adharCardNumber: req.body.adharCardNumber,
        password: req.body.password,
        credits: 0.0,
        createDateTime: req.body.createDateTime,
        updateDateTime: req.body.updateDateTime,
        activation: req.body.activation
    }).then(user => {
        if(req.body.roles) {
            console.log("In Sign up : " + req.body.roles)
            Role.findAll({
                where: {
                    name: {
                        [Op.or] : req.body.roles
                    }
                }
            }).then(roles => {
                console.log("Roles : " + roles);
                user.setRoles(roles).then(() => {
                    res.status(200).send({
                        message: "User created successFully"
                    });
                })
            })
        } else {
            user.setRoles([1]).then(() => {
                res.status(200).send({
                    message: "User created successfullly"
                });
            });
        }
    }).catch(err => {
        return res.status(201).send({
            message: "Db side error please contract technical team"
        });
    });
}


exports.signin = (req, res) => {
    User.findOne({
        where: {
            mobileNumber: req.body.mobileNumber,
        }
    }).then(user => {
        if(user == null) {
            res.status(201).send({
                message: "User must me register first"
            });
            return;
        }
        if(user.password === req.body.password) {
            if(!user.activation) {
                res.status(202).send({
                    message: "User not activated from the admin side. Please wait or contract admin"
                });
            } else {
                var token = jwt.sign({id: user.id}, config.secret, {
                    expiresIn: 86400
                });
                return res.status(200).send({
                    id: user.id,
                    username: user.firstName,
                    mobileNumber: user.mobileNumber,
                    accessToken: token
                });
            }
        } else {
            return res.status(201).send({
                message: "Enter passoword is wrong"
            });
        }
        
    })
}

