const controller = require('../../controllers/flight/searchFlight.controller');

module.exports = app => {
    app.post('/api/searchResult', [], controller.getSearchResults);
}