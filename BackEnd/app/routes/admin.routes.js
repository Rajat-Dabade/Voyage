const { authJwt } = require('../middleware');
const controller = require('../controllers/admin.controller');


module.exports = app => {

    app.get('/api/auth/admin/getUnactivatedUser', [authJwt.verifyToken, authJwt.isAdmin], controller.getUnactivatedUser);

    app.put('/api/auth/admin/activateUser/:id', [authJwt.verifyToken, authJwt.isAdmin], controller.activateUser);

    app.get('/api/admin/getUserByMobileNumber/:number', [authJwt.verifyToken, authJwt.isAdmin], controller.getUserByMobileNumber);

    app.post('/api/admin/updateCredit', [authJwt.verifyToken, authJwt.isAdmin], controller.updateCredit);

    app.get('/api/admin/getAllActiveUser', [authJwt.verifyToken, authJwt.isAdmin], controller.getAllActiveUser);
}