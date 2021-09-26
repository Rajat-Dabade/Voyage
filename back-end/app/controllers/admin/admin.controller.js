const db = require('../../models');
const User = db.user;

exports.getUnactivatedUser = (req, res) => {
    User.findAll({
        order:[
            ['createdAt', 'DESC']
        ],
        where: {
            activation: false
        }
    }).then(users => {
        if(!users) {
            return res.status(201).send({
                message: "No new registration avaiable"
            });
        }
        return res.status(200).send(users);
    })
}

exports.activateUser = (req, res) => {
    User.update({
        activation: true
    }, {
        where : {
            id: req.params.id
        }
    }).then(() => {
        return res.status(200).send({
            message: "User activated successfully"
        });
    });
}

exports.getUserByMobileNumber = (req, res) => {
    User.findOne({
        where: {
            mobileNumber: req.params.number
        }
    }).then(user => {
        if(!user) {
            return res.status(201).send({
                message: "No user present with this mobile number"
            })
        }
        return res.status(200).send(user);
    })
}

exports.updateCredit = (req, res) => {
    User.findOne({
        where: {
            id: req.body.id
        }
    }).then(user => {
        if(!user) {
            return res.status(201).send({
                message: "User not found"
            });
        }
        if(user.activation) {
            User.update({
                credits: req.body.credit
            }, {
                where: {
                    id: req.body.id
                }
            }).then(() => {
                return res.status(200).send({
                    message: "Credit updated succussfully"
                });
            });
        } else {
            return res.status(201).send({
                message: "Please activate the user before setting the credit"
            });
        }
    });
    
}

exports.getAllActiveUser = (req, res) => {
    User.findAll({
        where: {
            activation: true
        }
    }).then(users => {
        if(!users) {
            return res.status(201).send({
                message: "No active user found"
            });
        }
        return res.status(200).send(users);
    })
}