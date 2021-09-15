const {authJwt} = require('../middleware');
const controller = require('../controllers/book.controller');

module.exports = app => {
    app.post('/api/book', [authJwt.verifyToken], controller.book);
}
