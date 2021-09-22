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

exports.book = async (req, res) => {
    const requestObject = {
        "ResultIndex": req.body.ResultIndex,
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
        //         "Currency": req.body.Passengers[i].Fare.Currency,
        //         "BaseFare": req.body.Passengers[i].Fare.BaseFare,
        //         "Tax": req.body.Passengers[i].Fare.Tax,
        //         "YQTax": req.body.Passengers[i].Fare.YQTax,
        //         "AdditionalTxnFeePub": req.body.Passengers[i].Fare.AdditionalTxnFeePub,
        //         "AdditionalTxnFeeOfrd": req.body.Passengers[i].Fare.AdditionalTxnFeeOfrd,
        //         "OtherCharges": req.body.Passengers[i].Fare.OtherCharges,
        //         "Discount": req.body.Passengers[i].Fare.Discount,
        //         "PublishedFare": req.body.Passengers[i].Fare.PublishedFare,
        //         "OfferedFare": req.body.Passengers[i].Fare.OfferedFare,
        //         "TdsOnCommission": req.body.Passengers[i].Fare.TdsOnCommission,
        //         "TdsOnPLB": req.body.Passengers[i].Fare.TdsOnPLB,
        //         "TdsOnIncentive": req.body.Passengers[i].Fare.TdsOnIncentive,
        //         "ServiceFee": req.body.Passengers[i].Fare.ServiceFee
        //     },
        //     "City": req.body.Passengers[i].City,
        //     "CountryCode": req.body.Passengers[i].CountryCode,
        //     "CellCountryCode": req.body.Passengers[i].CellCountryCode,
        //     "ContactNo": req.body.Passengers[i].ContactNo,
        //     "Nationality": req.body.Passengers[i].Nationality,
        //     "Email": req.body.Passengers[i].Email,
        //     "IsLeadPax": req.body.Passengers[i].IsLeadPax,
        //     "FFAirlineCode": req.body.Passengers[i].FFAirlineCode,
        //     "FFNumber": req.body.Passengers[i].FFNumber,
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
        let Passenger = {
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
                "Currency": req.body.Passengers[i].Fare.Currency,
                "BaseFare": req.body.Passengers[i].Fare.BaseFare,
                "Tax": req.body.Passengers[i].Fare.Tax,
                "YQTax": req.body.Passengers[i].Fare.YQTax,
                "AdditionalTxnFeePub": req.body.Passengers[i].Fare.AdditionalTxnFeePub,
                "AdditionalTxnFeeOfrd": req.body.Passengers[i].Fare.AdditionalTxnFeeOfrd,
                "OtherCharges": req.body.Passengers[i].Fare.OtherCharges,
                "Discount": req.body.Passengers[i].Fare.Discount,
                "PublishedFare": req.body.Passengers[i].Fare.PublishedFare,
                "OfferedFare": req.body.Passengers[i].Fare.OfferedFare,
                "TdsOnCommission": req.body.Passengers[i].Fare.TdsOnCommission,
                "TdsOnPLB": req.body.Passengers[i].Fare.TdsOnPLB,
                "TdsOnIncentive": req.body.Passengers[i].Fare.TdsOnIncentive,
                "ServiceFee": req.body.Passengers[i].Fare.ServiceFee
            },
            "City": req.body.Passengers[i].City,
            "CountryCode": req.body.Passengers[i].CountryCode,
            "CellCountryCode": req.body.Passengers[i].CellCountryCode,
            "ContactNo": req.body.Passengers[i].ContactNo,
            "Nationality": req.body.Passengers[i].Nationality,
            "Email": req.body.Passengers[i].Email,
            "IsLeadPax": req.body.Passengers[i].IsLeadPax,
            "FFAirlineCode": req.body.Passengers[i].FFAirlineCode,
            "FFNumber": req.body.Passengers[i].FFNumber,

            //Doubt wheather to include the following data or not
            "GSTCompanyAddress": req.body.Passengers[i].GSTCompanyAddress,
            "GSTCompanyContactNumber": req.body.Passengers[i].GSTCompanyContactNumber,
            "GSTCompanyName": req.body.Passengers[i].GSTCompanyName,
            "GSTNumber": req.body.Passengers[i].GSTNumber,
            "GSTCompanyEmail": req.body.Passengers[i].GSTCompanyEmail
        };

        if (req.body.Passengers[i].SeatPreference) {
            const SeatPreference = {
                "Code": req.body.Passengers[i].SeatPreference.Code,
                "Description": req.body.Passengers[i].SeatPreference.Description
            }
            Passenger.SeatPreference = SeatPreference;
        }
        Passengers.push(Passenger);
    }


    requestObject.Passengers = Passengers;



    fetch('http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/Book',
        {
            method: "POST",
            body: JSON.stringify(requestObject),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then(data => {
            res.status(202).send(data);
        })
        .catch(err => {
            return res.status(201).send({
                message: "Cant able to fetch the fairQoutes, please try again after sometime"
            });
        });
}