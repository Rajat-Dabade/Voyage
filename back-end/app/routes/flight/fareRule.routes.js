const { authJwt } = require('../../middleware');
const fareRareAuth = require('../../middleware/flight/fareRule.auth');
const controller = require('../../controllers/flight/fareRule.controller');

module.exports = app => {
    app.post('/api/getFareRules', [authJwt.verifyToken, fareRareAuth.validateFareRule], controller.getFareRule);
}