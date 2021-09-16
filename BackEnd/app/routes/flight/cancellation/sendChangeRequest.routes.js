const {authJwt} = require('../../../middleware');
const controller  = require('../../../controllers/flight/cancellation/sendChangeRequest.controller');

module.exports = app => {
    app.post('/api/cancel/sendChangeRequest', [authJwt.verifyToken], controller.sendChangeRequest);
}