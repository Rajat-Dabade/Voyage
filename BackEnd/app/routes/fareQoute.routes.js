const {authJwt} = require('../middleware');
const controller = require('../controllers/fareQuote.controller')

module.exports = app => {
    app.post('/api/fareQoute/', [authJwt.verifyToken], controller.getFareQoute);
}