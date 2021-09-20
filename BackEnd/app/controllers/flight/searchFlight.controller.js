const fs = require('fs');
const fetch = require('node-fetch');

let tokenId = null;

fs.readFile(__dirname + '/../../config/tokenId.json', 'utf-8', (err, tokenData) => {
    if (err) {
        console.log(err);
    } else {
        tokenId = JSON.parse(tokenData).tokenId;
    }
});

exports.getSearchResults = async (req, res) => {
    console.log(tokenId);
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
                "Origin": req.body.Segments[0].Origin,
                "Destination": req.body.Segments[0].Destination,
                "FlightCabinClass": req.body.Segments[0].FlightCabinClass,
                "PreferredDepartureTime": req.body.Segments[0].PreferredDepartureTime,
                "PreferredArrivalTime": req.body.Segments[0].PreferredArrivalTime
            }
        ],
        "Sources": req.body.Sources
    }


    console.log("REquest object" + JSON.stringify(requestObject));

    fetch('http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/Search',
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
                message: "Cant able to fetch the Flight, please try again after sometime"
            })
        });
}