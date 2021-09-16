const fs = require('fs');
const fetch = require('node-fetch');

let tokenId = null;

fs.readFile(__dirname + '/../config/tokenId.json', 'utf-8', (err, tokenData) => {
    if (err) {
        console.log(err);
    } else {
        tokenId = JSON.parse(tokenData).tokenId;
    }
});

exports.getBookingDetails = async (req, res) => {
    requestObject = {
        "EndUserIp": req.body.EndUserIp,
        "TokenId": tokenId,
        "BookingId": req.body.BookingId,
        "PNR": req.body.PNR,
        "FirstName": req.body.FirstName,
        "LastName": req.body.LastName,
        "TraceId": req.body.TraceId
    }

    const response = await fetch('http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/GetBookingDetails',
        {
            method: 'POST',
            body: JSON.stringify(requestObject),
            headers: {'Content-Type': 'application/json'}
        }).catch(err => {
            console.log(err);
            return res.status(201).send({
                message: "Cant able to fetch the booking details, please try again after sometime"
            })
        });

    const data = await response.json();
    res.status(200).send(data);
}