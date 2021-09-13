const { authJwt } = require('../middleware');
const controller = require('../controllers/fareRule.controller');

module.exports = app => {
    app.post('/api/getFareRules', [authJwt.verifyToken], controller.getFareRule);
}