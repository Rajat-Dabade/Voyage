exports.verifyFlightLccData = (req, res, next) => {
    if (!req.body.EndUserIp
        || !req.body.TraceId
        || !req.body.ResultIndex) {
        return res.status(201).send({
            message: "Data request is should be not empty"
        });
    }

    for (let i = 0; i < req.body.Passengers.length; i++) {
        if (!req.body.Passengers[i].Title
            || !req.body.Passengers[i].FirstName
            || !req.body.Passengers[i].LastName
            || !req.body.Passengers[i].PaxType
            || !req.body.Passengers[i].Gender
            || !req.body.Passengers[i].AddressLine1
            || !req.body.Passengers[i].city
            || !req.body.Passengers[i].CountryCode
            || !req.body.Passengers[i].CountryName
            || !req.body.Passengers[i].ContactNo
            || !req.body.Passengers[i].Email
            || !req.body.Passengers[i].IsLeadPax
            || !req.body.Passengers[i].GSTCompanyAddress
            || !req.body.Passengers[i].GSTCompanyContactNumber
            || !req.body.Passengers[i].GSTCompanyName
            || !req.body.Passengers[i].GSTNumber
            || !req.body.Passengers[i].GSTCompanyEmail
            || !req.body.Passengers[i].Fare.BaseFare
            || !req.body.Passengers[i].Fare.Tax
            || !req.body.Passengers[i].Fare.TransactionFee
            || !req.body.Passengers[i].Fare.YQTax
            || !req.body.Passengers[i].Fare.AdditionalTxnFeeOfrd
            || !req.body.Passengers[i].Fare.AdditionalTxnFeePub
            || !req.body.Passengers[i].Fare.AirTransFee) {
            return res.status(201).send({
                message: "Data request is should be not empty"
            });
        }

        if (req.body.Passengers[i].Baggage) {
            for (let j = 0; j < req.body.Passengers[i].Baggage.length; j++) {
                if (!req.body.Passengers[i].Baggage[j].Code
                    || !req.body.Passengers[i].Baggage[j].Description
                    || !req.body.Passengers[i].Baggage[j].Weight
                    || !req.body.Passengers[i].Baggage[j].Currency
                    || !req.body.Passengers[i].Baggage[j].Price
                    || !req.body.Passengers[i].Baggage[j].Origin
                    || !req.body.Passengers[i].Baggage[j].Destination) {
                    return res.status(201).send({
                        message: "Data request is should be not empty"
                    });
                }
            }
        }

        if (req.body.Passengers[i].MealDynamic) {
            for (let j = 0; j < req.body.Passengers[i].MealDynamic.length; j++) {
                if (!req.body.Passengers[i].MealDynamic[j].WayType
                    || !req.body.Passengers[i].MealDynamic[j].Code
                    || !req.body.Passengers[i].MealDynamic[j].Description
                    || !req.body.Passengers[i].MealDynamic[j].AirlineDescription
                    || !req.body.Passengers[i].MealDynamic[j].Quantity
                    || !req.body.Passengers[i].MealDynamic[j].Price
                    || !req.body.Passengers[i].MealDynamic[j].Currency
                    || !req.body.Passengers[i].MealDynamic[j].Origin
                    || !req.body.Passengers[i].MealDynamic[j].Destination
                    || !req.body.Passengers[i].MealDynamic[j].Nationality) {
                    return res.status(201).send({
                        message: "Data request is should be not empty"
                    });
                }
            }
        }

    }

    next();
}