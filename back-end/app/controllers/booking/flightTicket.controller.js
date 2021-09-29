const db = require('../../models');

const UserTicket = db.userTicket;

exports.createTicket = (req, res) => {
    UserTicket.create({
        pnr: req.body.pnr,
        bookingId: req.body.bookingId,
        traceId: req.body.traceId,
        isLcc: req.body.isLcc,
        isTicketDone: req.body.isTicketDone,
        userId: req.userId
    }).then(userTicket => {
        return res.status(200).send({
            status: 1,
            message: "Ticket created successfully"
        })
    }).catch(err => {
        return res.status(201).send({
            status: 0,
            message: "Cant able to create the ticket"
        });
    })
}