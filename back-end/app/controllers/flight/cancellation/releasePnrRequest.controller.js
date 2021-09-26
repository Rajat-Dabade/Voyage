const fs = require('fs');
const fetch = require('node-fetch');

let tokenId;

fs.readFile(__dirname + '/../../../config/tokenId.json', 'utf-8', (err, tokenData) => {
    if (err) {
        console.log(err);
    } else {
        tokenId = JSON.parse(tokenData).tokenId;
    }
});

exports.releasePnrRequest = async (req, res) => {
    requestObject = {
        "EndUserIp": req.body.EndUserIp,
        "TokenId": tokenId,
        "BookingId": req.body.BookingId,
        "Source": req.body.Source
    }

    fetch('http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/ReleasePNRRequest',
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
                message: "Cant able to fetch the fairQoutes, please try again after sometime"
            });
        });
}