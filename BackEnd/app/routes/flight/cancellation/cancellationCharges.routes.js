const {authJwt} = require('../../../middleware');
const controller = require('../../../controllers/flight/cancellation/cancellationCharge.controller');

module.exports = app => {
    app.post('/api/cancel/cancellationCharges', [authJwt.verifyToken], controller.getCancellationCharges);
}