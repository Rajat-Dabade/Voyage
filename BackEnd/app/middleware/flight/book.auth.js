exports.verifyBookData = (req, res, next) => {
    if (req.body.ResultIndex === undefined
        || req.body.EndUserIp === undefined
        || req.body.TraceId === undefined) {
        return res.status(201).send({
            code: 301,
            message: "Data request is should be not empty"
        });
    }

    if (!req.body.Passengers.length) {
        return res.status(201).send({
            code: 302,
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
            || req.body.Passengers[i].Fare.BaseFare === undefined
            || req.body.Passengers[i].Fare.Tax === undefined
            || req.body.Passengers[i].Fare.TransactionFee === undefined
            || req.body.Passengers[i].Fare.YQTax === undefined
            || req.body.Passengers[i].Fare.AdditionalTxnFeeOfrd === undefined
            || req.body.Passengers[i].Fare.AdditionalTxnFeePub === undefined
            || req.body.Passengers[i].Fare.AirTransFee === undefined
            || req.body.Passengers[i].City === undefined
            || req.body.Passengers[i].CountryCode === undefined
            || req.body.Passengers[i].CountryName === undefined
            || req.body.Passengers[i].ContactNo === undefined
            || req.body.Passengers[i].Email === undefined
            || req.body.Passengers[i].Nationality === undefined) {
            return res.status(201).send({
                code: 303,
                message: "Data request is should be not empty"
            });
        }
    }

    next();
}