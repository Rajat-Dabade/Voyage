const fetch = require('node-fetch');
const fs = require('fs');

let tokenId;

fs.readFile(__dirname + '/../../config/tokenId.json', 'utf-8', (err, tokenData) => {
    if (err) {
        console.log(err);
    } else {
        tokenId = JSON.parse(tokenData).tokenId;
    }
});

exports.getFareRule = async (req, res) => {
    console.log(tokenId);
    requestObject = {
        "EndUserIp": req.body.EndUserIp,
        "TokenId": tokenId,
        "TraceId": req.body.TraceId,
        "ResultIndex": req.body.ResultIndex
    };

    console.log("Request object : " + JSON.stringify(requestObject));

    fetch('http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/FareRule',
        {
            method: 'POST',
            body: JSON.stringify(requestObject),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res = res.json())
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            console.log(err);
            return res.status(201).send({
                message: "Cant able to fetch the fairRule, please try again after sometime"
            })
        });


}