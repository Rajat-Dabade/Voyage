const {authJwt} = require('../../middleware');
const controller = require('../../controllers/flight/book.controller');
const bookAuth = require('../../middleware/flight/book.auth');

module.exports = app => {
    app.post('/api/book', [authJwt.verifyToken, bookAuth.verifyBookData], controller.book);
}
