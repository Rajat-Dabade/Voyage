exports.verifyFlightNonLccData = (req, res, next) => {
    if (req.body.EndUserIp === undefined
        || req.body.TraceId === undefined
        || req.body.PNR === undefined
        || req.body.BookingId === undefined) {
        return res.status(201).send({
            message: "Data request is should be not empty"
        });
    }

    next();
}