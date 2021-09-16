const {authJwt} = require('../../middleware');
const controller = require('../../controllers/flight/ticket.controller');

module.exports = app => {
    app.post('/api/ticket', [authJwt.verifyToken], controller.ticket);
}