const {authJwt} = require('../../middleware');
const controller = require('../../controllers/booking/flightTicket.controller');

module.exports = app => {
    app.post('/api/create/ticket', [authJwt.verifyToken], controller.createTicket);
}