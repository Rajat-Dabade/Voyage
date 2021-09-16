const { token } = require("morgan")

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

exports.getCancellationCharges = (req, res) => {
    requestObject = {
        "BookingId": req.body.BookingId,
        "RequestType": req.body.RequestType,
        "BookingMode": req.body.BookingMode,
        "EndUserIp": req.body.EndUserIp,
       "TokenId": tokenId
       }

    const response = await fetch('http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/GetCancellationCharges',
    {
        method: 'POST',
        body: JSON.stringify(requestObject),
        headers: {'Content-Type': 'application/json'}
    }).catch(err => {
        console.log(err);
        return res.status(201).send({
            message: "Cant able to fetch the Cancellation charges, please try again after sometime"
        })
    });

   const data = await response.json();
   res.status(200).send(data);
}