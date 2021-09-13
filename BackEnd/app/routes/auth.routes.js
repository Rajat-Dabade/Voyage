const { verifySignUp, authJwt } = require('../middleware');
const controller = require('../controllers/auth.controller');

module.exports = app => {
    app.post('/api/auth/user/signup', 
        [
            verifySignUp.checkDuplicateModileNumber,
            verifySignUp.checkRolesExists
        ],
        controller.signup
    );

    app.post('/api/auth/signin', controller.signin);
    
};