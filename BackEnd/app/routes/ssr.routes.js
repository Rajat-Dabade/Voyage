const {authJwt} = require('../middleware');
const controller = require('../controllers/ssr.controller');

module.exports = app => {
    app.post('/api/ssr', [authJwt.verifyToken], controller.getSsr);
}