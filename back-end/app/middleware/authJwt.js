const jwt = require('jsonwebtoken');
const config = require('../config/auth.config');
const db = require('../models');
const User = db.user;

verifyToken = (req, res, next) => {
    let token = req.headers['x-access-token'];
    console.log("Verifying access token");
    if(!token) {
        res.status(201).send({
            message: "No token provied"
        });
        return;
    }

    jwt.verify(token, config.secret, (err, decode) => {
        if(err) {
            return res.status(201).send({
                message: "Unathorized"
            });
        }
        req.userId = decode.id;
        next();
    })
};

isAdmin = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for(let i = 0; i < roles.length; i++) {
                if(roles[i].dataValues.name == 'admin') {
                    next();
                    return;
                }
            }
            res.status(202).send({
                message: "Require admin Roles"
            });
            return;
        })
    });
};

const authJwt = {
    verifyToken: verifyToken,
    isAdmin: isAdmin,
};

module.exports = authJwt;