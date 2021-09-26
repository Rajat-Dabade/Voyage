const controller = require('../controllers/authentication.controller');

module.exports = app => {
    app.get('/api/auth/authentication', [], controller.generateToken);
}