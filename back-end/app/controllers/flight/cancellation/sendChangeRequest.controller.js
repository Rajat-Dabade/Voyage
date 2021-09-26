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

exports.sendChangeRequest = async (req, res) => {
    requestObject = {
        "BookingId": req.body.BookingId,
        "RequestType": req.body.RequestType,
        "CancellationType": req.body.CancellationType,
        "Sectors": [
            {
                "Origin": req.body.Origin,
                "Destination": req.body.Destination
            }
        ],
        "TicketId": [
            req.body.TicketId
        ],
        "Remarks": req.body.Remarks,
        "EndUserIp": req.body.EndUserIp,
        "TokenId": tokenId
    }

    fetch('http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/SendChangeRequest',
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
            return res.status(201).send({
                message: "Cant able to send change request, please try again after sometime"
            });
        });
}