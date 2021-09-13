const db = require('../models');
const ROLES = db.USER_ROLES;
const User = db.user;
const Op = db.Sequelize.Op;

checkDuplicateModileNumber = (req, res, next) => {
    User.findOne({
        where: {
            mobileNumber: req.body.mobileNumber
        }
    }).then(user => {
        if(user) {
            res.status(201).send({
                message: "User with mobile number already exists. Please sign-in"
            })
            return;
        }
        next();
    });
}

checkRolesExists = (req, res, next) => {
    let isAdmin = false;
    if(req.body.roles) {
        for(let i = 0; i < req.body.roles.length; i++) {
            if(req.body.roles[i] === "admin") {
                isAdmin = true
            }
            if(!ROLES.includes(req.body.roles[i])) {
                res.status(201).send({
                    message: "Failed! Role does not exist for " + req.body.roles[i]
                });
                return;
            }
        }
    }
    if(isAdmin) {
        req.body.activation = true;
    } else {
        req.body.activation = false;
    }
    next();
}

const verfiySignUp = {
    checkDuplicateModileNumber: checkDuplicateModileNumber,
    checkRolesExists: checkRolesExists
}

module.exports = verfiySignUp;