exports.validateSsr = (req, res, next) => {
    if (!req.body.EndUserIp
        || !req.body.TraceId
        || !req.body.ResultIndex) {
        return res.status(201).send({
            message: "Data request is should be not empty"
        });
    }
    next();
}