const controller = require('../../controllers/flight/searchFlight.controller');
const searchAuth = require('../../middleware/flight/search.auth');

module.exports = app => {
    app.post('/api/searchResult', [searchAuth.verifySearchData], controller.getSearchResults);
}