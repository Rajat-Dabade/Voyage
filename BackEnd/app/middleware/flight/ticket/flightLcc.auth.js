exports.verifyFlightLccData = (req, res, next) => {
    if (req.body.EndUserIp === undefined 
        || req.body.TraceId === undefined
        || req.body.ResultIndex === undefined) {
        return res.status(201).send({
            message: "Data request is should be not empty"
        });
    }

    for (let i = 0; i < req.body.Passengers.length; i++) {
        if (req.body.Passengers[i].Title === undefined
            || req.body.Passengers[i].FirstName === undefined
            || req.body.Passengers[i].LastName === undefined
            || req.body.Passengers[i].PaxType === undefined
            || req.body.Passengers[i].Gender === undefined
            || req.body.Passengers[i].AddressLine1 === undefined
            || req.body.Passengers[i].City === undefined
            || req.body.Passengers[i].CountryCode === undefined
            || req.body.Passengers[i].CountryName === undefined
            || req.body.Passengers[i].ContactNo === undefined
            || req.body.Passengers[i].Email === undefined
            || req.body.Passengers[i].IsLeadPax === undefined
            || req.body.Passengers[i].GSTCompanyAddress === undefined
            || req.body.Passengers[i].GSTCompanyContactNumber === undefined
            || req.body.Passengers[i].GSTCompanyName === undefined
            || req.body.Passengers[i].GSTNumber === undefined
            || req.body.Passengers[i].GSTCompanyEmail === undefined
            || req.body.Passengers[i].Fare.BaseFare === undefined
            || req.body.Passengers[i].Fare.Tax === undefined
            || req.body.Passengers[i].Fare.TransactionFee === undefined
            || req.body.Passengers[i].Fare.YQTax === undefined
            || req.body.Passengers[i].Fare.AdditionalTxnFeeOfrd === undefined
            || req.body.Passengers[i].Fare.AdditionalTxnFeePub === undefined
            || req.body.Passengers[i].Fare.AirTransFee === undefined) {
            return res.status(201).send({
                message: "Data request is should be not empty"
            });
        }

        if (req.body.Passengers[i].Baggage) {
            for (let j = 0; j < req.body.Passengers[i].Baggage.length; j++) {
                if (req.body.Passengers[i].Baggage[j].Code === undefined
                    || req.body.Passengers[i].Baggage[j].Description === undefined
                    || req.body.Passengers[i].Baggage[j].Weight === undefined
                    || req.body.Passengers[i].Baggage[j].Currency === undefined
                    || req.body.Passengers[i].Baggage[j].Price === undefined
                    || req.body.Passengers[i].Baggage[j].Origin === undefined
                    || req.body.Passengers[i].Baggage[j].Destination === undefined) {
                    return res.status(201).send({
                        message: "Data request is should be not empty"
                    });
                }
            }
        }

        if (req.body.Passengers[i].MealDynamic) {
            for (let j = 0; j < req.body.Passengers[i].MealDynamic.length; j++) {
                if (req.body.Passengers[i].MealDynamic[j].WayType === undefined
                    || req.body.Passengers[i].MealDynamic[j].Code === undefined
                    || req.body.Passengers[i].MealDynamic[j].Description === undefined
                    || req.body.Passengers[i].MealDynamic[j].AirlineDescription === undefined
                    || req.body.Passengers[i].MealDynamic[j].Quantity === undefined
                    || req.body.Passengers[i].MealDynamic[j].Price === undefined
                    || req.body.Passengers[i].MealDynamic[j].Currency === undefined
                    || req.body.Passengers[i].MealDynamic[j].Origin === undefined
                    || req.body.Passengers[i].MealDynamic[j].Destination === undefined
                    || req.body.Passengers[i].MealDynamic[j].Nationality === undefined) {
                    return res.status(201).send({
                        message: "Data request is should be not empty"
                    });
                }
            }
        }

    }

    next();
}