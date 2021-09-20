const {authJwt} = require('../../middleware');
const controller = require('../../controllers/flight/fareQuote.controller');
const fareQuote = require('../../middleware/flight/fareQuote.auth');

module.exports = app => {
    app.post('/api/fareQoute/', [authJwt.verifyToken, fareQuote.validateFareQuote], controller.getFareQoute);
}