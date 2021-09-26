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

exports.ticketLcc = async (req, res) => {
    requestObject = {
        "PreferredCurrency": null,
        "ResultIndex": req.body.ResultIndex,
        "AgentReferenceNo": req.body.AgentReferenceNo,
        // "Passengers": [{
        //     "Title": req.body.Passengers[i].Title,
        //     "FirstName": req.body.Passengers[i].FirstName,
        //     "LastName": req.body.Passengers[i].LastName,
        //     "PaxType": req.body.Passengers[i].PaxType,
        //     "DateOfBirth": req.body.Passengers[i].DateOfBirth,
        //     "Gender": req.body.Passengers[i].Gender,
        //     "PassportNo": req.body.Passengers[i].PassportNo,
        //     "PassportExpiry": req.body.Passengers[i].PassportExpiry,
        //     "AddressLine1": req.body.Passengers[i].AddressLine1,
        //     "AddressLine2": req.body.Passengers[i].AddressLine2,
        //     "Fare": {
        //         "BaseFare": req.body.Passengers[i].Fare.BaseFare,
        //         "Tax": req.body.Passengers[i].Fare.Tax,
        //         "YQTax": req.body.Passengers[i].Fare.YQTax,
        //         "AdditionalTxnFeePub": req.body.Passengers[i].Fare.AdditionalTxnFeePub,
        //         "AdditionalTxnFeeOfrd": req.body.Passengers[i].Fare.AdditionalTxnFeeOfrd,
        //         "OtherCharges": req.body.Passengers[i].Fare.OtherCharges
        //     },
        //     "City": req.body.Passengers[i].City,
        //     "CountryCode": req.body.Passengers[i].CountryCode,
        //     "CountryName": req.body.Passengers[i].CountryName,
        //     "Nationality": req.body.Passengers[i].Nationality,
        //     "ContactNo": req.body.Passengers[i].ContactNo,
        //     "Email": req.body.Passengers[i].Email,
        //     "IsLeadPax": req.body.Passengers[i].IsLeadPax,
        //     "FFAirlineCode": req.body.Passengers[i].FFAirlineCode,
        //     "FFNumber": req.body.Passengers[i].FFNumber,
        //     "Baggage": [
        //         {
        //             "AirlineCode": req.body.Passengers[i].Baggage[j].AirlineCode,
        //             "FlightNumber": req.body.Passengers[i].Baggage[j].FlightNumber,
        //             "WayType": req.body.Passengers[i].Baggage[j].WayType,
        //             "Code": req.body.Passengers[i].Baggage[j].Code,
        //             "Description": req.body.Passengers[i].Baggage[j].Description,
        //             "Weight": req.body.Passengers[i].Baggage[j].Weight,
        //             "Currency": req.body.Passengers[i].Baggage[j].Currency,
        //             "Price": req.body.Passengers[i].Baggage[j].Price,
        //             "Origin": req.body.Passengers[i].Baggage[j].Origin,
        //             "Destination": req.body.Passengers[i].Baggage[j].Destination
        //         }],
        //     "MealDynamic": [
        //         {
        //             "AirlineCode": req.body.Passengers[i].MealDynamic[j].AirlineCode,
        //             "FlightNumber": req.body.Passengers[i].MealDynamic[j].FlightNumber,
        //             "WayType": req.body.Passengers[i].MealDynamic[j].WayType,
        //             "Code": req.body.Passengers[i].MealDynamic[j].Code,
        //             "Description": req.body.Passengers[i].MealDynamic[j].Description,
        //             "AirlineDescription": req.body.Passengers[i].MealDynamic[j].AirlineDescription,
        //             "Quantity": req.body.Passengers[i].MealDynamic[j].Quantity,
        //             "Currency": req.body.Passengers[i].MealDynamic[j].Currency,
        //             "Price": req.body.Passengers[i].MealDynamic[j].Price,
        //             "Origin": req.body.Passengers[i].MealDynamic[j].Origin,
        //             "Destination": req.body.Passengers[i].MealDynamic[j].Destination
        //         }],
        //     "SeatDynamic": [
        //         {
        //             "AirlineCode": req.body.Passengers[i].SeatDynamic[j].AirlineCode,
        //             "FlightNumber": req.body.Passengers[i].SeatDynamic[j].FlightNumber,
        //             "CraftType": req.body.Passengers[i].SeatDynamic[j].CraftType,
        //             "Origin": req.body.Passengers[i].SeatDynamic[j].Origin,
        //             "Destination": req.body.Passengers[i].SeatDynamic[j].Destination,
        //             "AvailablityType": req.body.Passengers[i].SeatDynamic[j].AvailablityType,
        //             "Description": req.body.Passengers[i].SeatDynamic[j].Description,
        //             "Code": req.body.Passengers[i].SeatDynamic[j].Code,
        //             "RowNo": req.body.Passengers[i].SeatDynamic[j].RowNo,
        //             "SeatNo": req.body.Passengers[i].SeatDynamic[j].SeatNo,
        //             "SeatType": req.body.Passengers[i].SeatDynamic[j].SeatType,
        //             "SeatWayType": req.body.Passengers[i].SeatDynamic[j].SeatWayType,
        //             "Compartment": req.body.Passengers[i].SeatDynamic[j].Compartment,
        //             "Deck": req.body.Passengers[i].SeatDynamic[j].Deck,
        //             "Currency": req.body.Passengers[i].SeatDynamic[j].Currency,
        //             "Price": req.body.Passengers[i].SeatDynamic[j].Price

        //         }],
        //     "GSTCompanyAddress": req.body.Passengers[i].GSTCompanyAddress,
        //     "GSTCompanyContactNumber": req.body.Passengers[i].GSTCompanyContactNumber,
        //     "GSTCompanyName": req.body.Passengers[i].GSTCompanyName,
        //     "GSTNumber": req.body.Passengers[i].GSTNumber,
        //     "GSTCompanyEmail": req.body.Passengers[i].GSTCompanyEmail
        // }],
        "EndUserIp": req.body.EndUserIp,
        "TokenId": tokenId,
        "TraceId": req.body.TraceId
    }



    const Passengers = [];
    for (let i = 0; i < req.body.Passengers.length; i++) {
        Passenger = {
            "Title": req.body.Passengers[i].Title,
            "FirstName": req.body.Passengers[i].FirstName,
            "LastName": req.body.Passengers[i].LastName,
            "PaxType": req.body.Passengers[i].PaxType,
            "DateOfBirth": req.body.Passengers[i].DateOfBirth,
            "Gender": req.body.Passengers[i].Gender,
            "PassportNo": req.body.Passengers[i].PassportNo,
            "PassportExpiry": req.body.Passengers[i].PassportExpiry,
            "AddressLine1": req.body.Passengers[i].AddressLine1,
            "AddressLine2": req.body.Passengers[i].AddressLine2,
            "Fare": {
                "BaseFare": req.body.Passengers[i].Fare.BaseFare,
                "Tax": req.body.Passengers[i].Fare.Tax,
                "YQTax": req.body.Passengers[i].Fare.YQTax,
                "AdditionalTxnFeePub": req.body.Passengers[i].Fare.AdditionalTxnFeePub,
                "AdditionalTxnFeeOfrd": req.body.Passengers[i].Fare.AdditionalTxnFeeOfrd,
                "OtherCharges": req.body.Passengers[i].Fare.OtherCharges
            },
            "City": req.body.Passengers[i].City,
            "CountryCode": req.body.Passengers[i].CountryCode,
            "CountryName": req.body.Passengers[i].CountryName,
            "Nationality": req.body.Passengers[i].Nationality,
            "ContactNo": req.body.Passengers[i].ContactNo,
            "Email": req.body.Passengers[i].Email,
            "IsLeadPax": req.body.Passengers[i].IsLeadPax,
            "FFAirlineCode": req.body.Passengers[i].FFAirlineCode,
            "FFNumber": req.body.Passengers[i].FFNumber,

            //Whether to include this data or not
            "GSTCompanyAddress": req.body.Passengers[i].GSTCompanyAddress,
            "GSTCompanyContactNumber": req.body.Passengers[i].GSTCompanyContactNumber,
            "GSTCompanyName": req.body.Passengers[i].GSTCompanyName,
            "GSTNumber": req.body.Passengers[i].GSTNumber,
            "GSTCompanyEmail": req.body.Passengers[i].GSTCompanyEmail
        }

        if (req.body.Passengers[i].Baggage) {
            const Baggages = [];
            for (let j = 0; j < req.body.Passengers[i].Baggage.length; j++) {
                let Baggage = {
                    "AirlineCode": req.body.Passengers[i].Baggage[j].AirlineCode,
                    "FlightNumber": req.body.Passengers[i].Baggage[j].FlightNumber,
                    "WayType": req.body.Passengers[i].Baggage[j].WayType,
                    "Code": req.body.Passengers[i].Baggage[j].Code,
                    "Description": req.body.Passengers[i].Baggage[j].Description,
                    "Weight": req.body.Passengers[i].Baggage[j].Weight,
                    "Currency": req.body.Passengers[i].Baggage[j].Currency,
                    "Price": req.body.Passengers[i].Baggage[j].Price,
                    "Origin": req.body.Passengers[i].Baggage[j].Origin,
                    "Destination": req.body.Passengers[i].Baggage[j].Destination
                }
                Baggages.push(Baggage);
            }
            Passenger.Baggage = Baggages;
        }

        if (req.body.Passengers[i].MealDynamic) {
            const MealDynamics = [];
            for (let j = 0; j < req.body.Passengers[i].MealDynamic.length; j++) {
                let MealDynamic = {
                    "AirlineCode": req.body.Passengers[i].MealDynamic[j].AirlineCode,
                    "FlightNumber": req.body.Passengers[i].MealDynamic[j].FlightNumber,
                    "WayType": req.body.Passengers[i].MealDynamic[j].WayType,
                    "Code": req.body.Passengers[i].MealDynamic[j].Code,
                    "Description": req.body.Passengers[i].MealDynamic[j].Description,
                    "AirlineDescription": req.body.Passengers[i].MealDynamic[j].AirlineDescription,
                    "Quantity": req.body.Passengers[i].MealDynamic[j].Quantity,
                    "Currency": req.body.Passengers[i].MealDynamic[j].Currency,
                    "Price": req.body.Passengers[i].MealDynamic[j].Price,
                    "Origin": req.body.Passengers[i].MealDynamic[j].Origin,
                    "Destination": req.body.Passengers[i].MealDynamic[j].Destination
                }
                MealDynamics.push(MealDynamic);
            }
            Passenger.MealDynamic = MealDynamics;
        }

        if (req.body.Passengers[i].SeatDynamic) {
            const SeatDynamics = [];
            for (let j = 0; j < req.body.Passengers[i].SeatDynamic.length; j++) {
                let SeatDynamic = {
                    "AirlineCode": req.body.Passengers[i].SeatDynamic[j].AirlineCode,
                    "FlightNumber": req.body.Passengers[i].SeatDynamic[j].FlightNumber,
                    "CraftType": req.body.Passengers[i].SeatDynamic[j].CraftType,
                    "Origin": req.body.Passengers[i].SeatDynamic[j].Origin,
                    "Destination": req.body.Passengers[i].SeatDynamic[j].Destination,
                    "AvailablityType": req.body.Passengers[i].SeatDynamic[j].AvailablityType,
                    "Description": req.body.Passengers[i].SeatDynamic[j].Description,
                    "Code": req.body.Passengers[i].SeatDynamic[j].Code,
                    "RowNo": req.body.Passengers[i].SeatDynamic[j].RowNo,
                    "SeatNo": req.body.Passengers[i].SeatDynamic[j].SeatNo,
                    "SeatType": req.body.Passengers[i].SeatDynamic[j].SeatType,
                    "SeatWayType": req.body.Passengers[i].SeatDynamic[j].SeatWayType,
                    "Compartment": req.body.Passengers[i].SeatDynamic[j].Compartment,
                    "Deck": req.body.Passengers[i].SeatDynamic[j].Deck,
                    "Currency": req.body.Passengers[i].SeatDynamic[j].Currency,
                    "Price": req.body.Passengers[i].SeatDynamic[j].Price
                }
                SeatDynamics.push(SeatDynamic)
            }
            Passenger.SeatDynamic = SeatDynamics;
        }

        Passengers.push(Passenger);
    }

    requestObject.Passengers = Passengers;


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