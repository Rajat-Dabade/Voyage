const { authJwt } = require('../../middleware');
const controller = require('../../controllers/flight/getBookingDetails.controller');

module.exports = app => {
    app.post('/api/booking/details', [authJwt.verifyToken], controller.getBookingDetails);
};