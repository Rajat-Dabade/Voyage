const fs = require('fs');
const fetch = require('node-fetch');

let tokenId;

fs.readFile(__dirname + '/../../config/tokenId.json', 'utf-8', (err, tokenData) => {
    if (err) {
        console.log(err);
    } else {
        tokenId = JSON.parse(tokenData).tokenId;
    }
});

exports.getFareQoute = async (req, res) => {
    console.log(tokenId)
    requestObject = {
        "EndUserIp": req.body.EndUserIp,
        "TokenId": tokenId,
        "TraceId": req.body.TraceId,
        "ResultIndex": req.body.ResultIndex
    };

    fetch('http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/FareQuote',
        {
            method: "POST",
            body: JSON.stringify(requestObject),
            headers: {'Content-Type' : 'application/json'}
        })
        .then(res => res.json())
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            return res.status(201).send({
                message : "Cant able to fetch the fairQoutes, please try again after sometime"
            });
        });
        
}