const { authJwt } = require('../../../middleware');
const controller = require('../../../controllers/flight/cancellation/getChangeRequestStatus.controller');
const cancellationAuth = require('../../../middleware/flight/cancellation');

module.exports = app => {
    app.post('/api/getChangeRequestStatus', [authJwt.verifyToken, cancellationAuth.getChangeRequestStatusAuth], controller.getChangeRequestStatus);
}