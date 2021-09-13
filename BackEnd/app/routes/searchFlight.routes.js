const controller = require('../controllers/searchFlight.controller');

module.exports = app => {
    app.post('/api/searchResult', [], controller.getSearchResults);
}