const {authJwt} = require('../../../middleware');
const controller = require('../../../controllers/flight/cancellation/cancellationCharge.controller');
const cancellationAuth = require('../../../middleware/flight/cancellation');

module.exports = app => {
    app.post('/api/cancel/cancellationCharges', [authJwt.verifyToken, cancellationAuth.cancellationChargeAuth], controller.getCancellationCharges);
}