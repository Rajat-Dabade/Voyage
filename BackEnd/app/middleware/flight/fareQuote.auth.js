exports.validateFareQuote = (req, res, next) => {
    if (req.body.EndUserIp === undefined
        || req.body.TraceId === undefined
        || req.body.ResultIndex === undefined) {
        return res.status(201).send({
            message: "Data request is should be not empty"
        });
    }
    next();
}