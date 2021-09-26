const {authJwt} = require('../../../middleware');
const controller  = require('../../../controllers/flight/cancellation/releasePnrRequest.controller');
const cancellationAuth = require('../../../middleware/flight/cancellation');

module.exports = app => {
    app.post('/api/cancel/releasePnrRequest', [authJwt.verifyToken, cancellationAuth.releasePnrRequestAuth], controller.releasePnrRequest);
}