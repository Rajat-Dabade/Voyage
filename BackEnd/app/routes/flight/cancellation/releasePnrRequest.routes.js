const {authJwt} = require('../../../middleware');
const controller  = require('../../../controllers/flight/cancellation/releasePnrRequest.controller');

module.exports = app => {
    app.post('/api/cancel/releasePnrRequest', [authJwt.verifyToken], controller.releasePnrRequest);
}