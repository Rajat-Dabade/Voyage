const fetch = require('node-fetch');
const fs = require('fs');

let tokenId;

fs.readFile(__dirname + '/../../../config/tokenId.json', 'utf-8', (err, tokenData) => {
    if (err) {
        console.log(err);
    } else {
        tokenId = JSON.parse(tokenData).tokenId;
    }
});

exports.ticketNonLcc = (req, res) => {
    requestObject = {
        "EndUserIp": req.body.EndUserIp,
        "TokenId": tokenId,
        "TraceId": req.body.TraceId,
        "PNR": req.body.PNR,
        "BookingId": req.body.BookingId,
        "Passport": [
            {
                "PaxId": req.body.PaxId,
                "PassportNo": req.body.PassportNo,
                "PassportExpiry": req.body.PassportExpiry,
                "DateOfBirth": req.body.DateOfBirth
            }
        ],
        "IsPriceChangeAccepted": req.body.IsPriceChangeAccepted
    };


    fetch('http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/Ticket',
        {
            method: 'POST',
            body: JSON.stringify(requestObject),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(201).send({
                message: "Cant able to book the ticket, please try again after sometime"
            });
        });
}