const { noExtendLeft } = require("sequelize/types/lib/operators");

exports.verifyFlightNonLccData = (req, res, next) => {
    if (!req.body.EndUserIp
        || !req.body.TraceId
        || !req.body.PNR
        || !req.body.BookingId) {
            return res.status(201).send({
                message: "Data request is should be not empty"
            });
    }

    next();
}