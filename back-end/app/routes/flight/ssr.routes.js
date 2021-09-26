const {authJwt} = require('../../middleware');
const controller = require('../../controllers/flight/ssr.controller');
const ssrAuth = require('../../middleware/flight/ssr.auth');

module.exports = app => {
    app.post('/api/ssr', [authJwt.verifyToken, ssrAuth.validateSsr], controller.getSsr);
}