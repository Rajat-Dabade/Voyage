exports.verifyBookData = (req, res, next) => {
    if (!req.body.ResultIndex
        || !req.body.EndUserIp
        || !req.body.TraceId) {
        return res.status(201).send({
            message: "Data request is should be not empty"
        });
    }

    if (!req.body.Passengers.length) {
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
            || !req.body.Passengers[i].Fare.BaseFare
            || !req.body.Passengers[i].Fare.Tax
            || !req.body.Passengers[i].Fare.TransactionFee
            || !req.body.Passengers[i].Fare.YQTax
            || !req.body.Passengers[i].Fare.AdditionalTxnFeeOfrd
            || !req.body.Passengers[i].Fare.AdditionalTxnFeePub
            || !req.body.Passengers[i].Fare.AirTransFee
            || !req.body.Passengers[i].City
            || !req.body.Passengers[i].CountryCode
            || !req.body.Passengers[i].CountryName
            || !req.body.Passengers[i].ContractNo
            || !req.body.Passengers[i].Email
            || !req.body.Passengers[i].Nationality) {
            return res.status(201).send({
                message: "Data request is should be not empty"
            });
        }
    }

    next();
}