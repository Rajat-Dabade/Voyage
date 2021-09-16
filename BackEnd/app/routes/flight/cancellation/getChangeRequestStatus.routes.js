const {authJwt} = require('../../../middleware');
const controller = require('../../../controllers/flight/cancellation/getChangeRequestStatus.controller');

module.exports = app => {
    app.post('/api/getChangeRequestStatus', [authJwt.verifyToken], controller.getChangeRequestStatus);
}