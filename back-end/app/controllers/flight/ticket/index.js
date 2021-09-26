const ticketLcc = require('./ticketLCC.controller');
const ticketNonLcc = require('./ticketNonLCC.controller');

const ticket = {
    ticketLcc: ticketLcc.ticketLcc,
    ticketNonLcc: ticketNonLcc.ticketNonLcc
};

module.exports = ticket;