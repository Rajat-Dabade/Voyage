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

exports.getSearchResults = async (req, res) => {
    requestObject = {
        "EndUserIp": req.body.EndUserIp,
        "TokenId": tokenId,
        "AdultCount": req.body.AdultCount,
        "ChildCount": req.body.ChildCount,
        "InfantCount": req.body.InfantCount,
        "DirectFlight": req.body.DirectFlight,
        "OneStopFlight": req.body.OneStopFlight,
        "JourneyType": req.body.JourneyType,
        "PreferredAirlines": req.body.PreferredAirlines,
        "Segments": [
            {
                "Origin": req.body.Origin,
                "Destination": req.body.Destination,
                "FlightCabinClass": req.body.FlightCabinClass,
                "PreferredDepartureTime": req.body.PreferredDepartureTime,
                "PreferredArrivalTime": req.body.PreferredArrivalTime
            }
        ],
        "Sources": req.body.Sources
    }

    const response = await fetch('http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/Search',
        {
            method: 'POST',
            body: JSON.stringify(requestObject),
            headers: { 'Content-Type': 'application/json' }
        });
    const data = await response.json();
    res.status(200).send(data);
}