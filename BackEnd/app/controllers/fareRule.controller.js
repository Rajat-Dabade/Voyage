const fetch = require('node-fetch');

exports.getFareRule = async (req, res) => {
    requestObject = {
        "EndUserIp": req.body.ip,
        "TokenId": req.body.TokenId,
        "TraceId": req.body.TraceId,
        "ResultIndex": req.body.ResultIndex
    };

    const response = await fetch('http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/FareQuote',
        {
            method: 'POST',
            body: JSON.stringify(requestObject),
            headers: {'Content-Type': 'application/json'}
        });

    const data = await response.json();
    res.status(200).send(data);
}