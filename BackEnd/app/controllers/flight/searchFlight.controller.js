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
        // "Segments": [
        //     {
        //         "Origin": req.body.Segments[0].Origin,
        //         "Destination": req.body.Segments[0].Destination,
        //         "FlightCabinClass": req.body.Segments[0].FlightCabinClass,
        //         "PreferredDepartureTime": req.body.Segments[0].PreferredDepartureTime,
        //         "PreferredArrivalTime": req.body.Segments[0].PreferredArrivalTime
        //     }
        // ],
        "Sources": req.body.Sources
    }

    const Segments = [];
    for(let i = 0; i < req.body.Segments.length; i++) {
        let segment = {
            "Origin": req.body.Segments[i].Origin,
            "Destination": req.body.Segments[i].Destination,
            "FlightCabinClass": req.body.Segments[i].FlightCabinClass,
            "PreferredDepartureTime": req.body.Segments[i].PreferredDepartureTime,
            "PreferredArrivalTime": req.body.Segments[i].PreferredArrivalTime
        }
        Segments.push(segment);
    }

    requestObject.Segments = Segments;

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