exports.verifyReleasePnrRequestData = (req, res, next) => {
    if (req.body.EndUserIp === undefined
        || req.body.BookingId === undefined
        || req.body.Source === undefined) {
        return res.status(201).send({
            message: "Data request is should be not empty"
        })
    }
    next();
}