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

exports.ticket = async (req, res) => {
    requestObject = {
        "PreferredCurrency": null,
        "ResultIndex": req.body.ResultIndex,
        "AgentReferenceNo": req.body.AgentReferenceNo,
        "Passengers": [{
            "Title": req.body.Title,
            "FirstName": req.body.FirstName,
            "LastName": req.body.LastName,
            "PaxType": req.body.PaxType,
            "DateOfBirth": req.body.DateOfBirth,
            "Gender": req.body.Gender,
            "PassportNo": req.body.PassportNo,
            "PassportExpiry": req.body.PassportExpiry,
            "AddressLine1": req.body.AddressLine1,
            "AddressLine2": req.body.AddressLine2,
            "Fare": {
                "BaseFare": req.body.BaseFare,
                "Tax": req.body.Tax,
                "YQTax": req.body.YQTax,
                "AdditionalTxnFeePub": req.body.AdditionalTxnFeePub,
                "AdditionalTxnFeeOfrd": req.body.AdditionalTxnFeeOfrd,
                "OtherCharges": req.body.OtherCharges
            },
            "City": req.body.City,
            "CountryCode": req.body.CountryCode,
            "CountryName": req.body.CountryName,
            "Nationality": req.body.Nationality,
            "ContactNo": req.body.ContactNo,
            "Email": req.body.Email,
            "IsLeadPax": req.body.IsLeadPax,
            "FFAirlineCode": req.body.FFAirlineCode,
            "FFNumber": req.body.FFNumber,
            "Baggage": [
                {
                    "AirlineCode": req.body.AirlineCode,
                    "FlightNumber": req.body.FlightNumber,
                    "WayType": req.body.WayType,
                    "Code": req.body.Code,
                    "Description": req.body.Description,
                    "Weight": req.body.Weight,
                    "Currency": req.body.Currency,
                    "Price": req.body.Price,
                    "Origin": req.body.Origin,
                    "Destination": req.body.Destination
                }],
            "MealDynamic": [
                {
                    "AirlineCode": req.body.AirlineCode,
                    "FlightNumber": req.body.FlightNumber,
                    "WayType": req.body.WayType,
                    "Code": req.body.Code,
                    "Description": req.body.Description,
                    "AirlineDescription": req.body.AirlineDescription,
                    "Quantity": req.body.Quantity,
                    "Currency": req.body.Currency,
                    "Price": req.body.Price,
                    "Origin": req.body.Origin,
                    "Destination": req.body.Destination
                }],
            "SeatDynamic": [
                {
                    "AirlineCode": req.body.AirlineCode,
                    "FlightNumber": req.body.FlightNumber,
                    "CraftType": req.body.CraftType,
                    "Origin": req.body.Origin,
                    "Destination": req.body.Destination,
                    "AvailablityType": req.body.AvailablityType,
                    "Description": req.body.Description,
                    "Code": req.body.Code,
                    "RowNo": req.body.RowNo,
                    "SeatNo": req.body.SeatNo,
                    "SeatType": req.body.SeatType,
                    "SeatWayType": req.body.SeatWayType,
                    "Compartment": req.body.Compartment,
                    "Deck": req.body.Deck,
                    "Currency": req.body.Currency,
                    "Price": req.body.Price

                }],
            "GSTCompanyAddress": req.body.GSTCompanyAddress,
            "GSTCompanyContactNumber": req.body.GSTCompanyContactNumber,
            "GSTCompanyName": req.body.GSTCompanyName,
            "GSTNumber": req.body.GSTNumber,
            "GSTCompanyEmail": req.body.GSTCompanyEmail
        }],
        "EndUserIp": req.body.EndUserIp,
        "TokenId": tokenId,
        "TraceId": req.body.TraceId
    }

    fetch('http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/Ticket',
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
                message: "Cant able to book the ticket, please try again after sometime"
            });
        });
}