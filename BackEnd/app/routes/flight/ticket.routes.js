const {authJwt} = require('../../middleware');
const controller = require('../../controllers/flight/ticket');
const ticketLccAuth = require('../../middleware/flight/ticket/flightLcc.auth');
const ticketNonLccAuth = require('../../middleware/flight/ticket/flightNonLcc.auth');

module.exports = app => {
    app.post('/api/ticket/lcc', [authJwt.verifyToken, ticketLccAuth.verifyFlightLccData], controller.ticketLcc);

    app.post('/api/ticket/nonLcc', [authJwt.verifyToken, ticketNonLccAuth.verifyFlightNonLccData], controller.ticketNonLcc)
}