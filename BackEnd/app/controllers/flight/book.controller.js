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
                "Currency": req.body.Currency,
                "BaseFare": req.body.BaseFare,
                "Tax": req.body.Tax,
                "YQTax": req.body.YQTax,
                "AdditionalTxnFeePub": req.body.AdditionalTxnFeePub,
                "AdditionalTxnFeeOfrd": req.body.AdditionalTxnFeeOfrd,
                "OtherCharges": req.body.OtherCharges,
                "Discount": req.body.Discount,
                "PublishedFare": req.body.PublishedFare,
                "OfferedFare": req.body.OfferedFare,
                "TdsOnCommission": req.body.TdsOnCommission,
                "TdsOnPLB": req.body.TdsOnPLB,
                "TdsOnIncentive": req.body.TdsOnIncentive,
                "ServiceFee": req.body.ServiceFee
            },
            "City": req.body.City,
            "CountryCode": req.body.CountryCode,
            "CellCountryCode": req.body.CellCountryCode,
            "ContactNo": req.body.ContactNo,
            "Nationality": req.body.Nationality,
            "Email": req.body.Email,
            "IsLeadPax": req.body.IsLeadPax,
            "FFAirlineCode": req.body.FFAirlineCode,
            "FFNumber": req.body.FFNumber,
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