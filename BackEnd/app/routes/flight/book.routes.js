const {authJwt} = require('../../middleware');
const controller = require('../../controllers/flight/book.controller');

module.exports = app => {
    app.post('/api/book', [authJwt.verifyToken], controller.book);
}
