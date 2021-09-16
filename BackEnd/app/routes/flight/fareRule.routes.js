const { authJwt } = require('../../middleware');
const controller = require('../../controllers/flight/fareRule.controller');

module.exports = app => {
    app.post('/api/getFareRules', [authJwt.verifyToken], controller.getFareRule);
}