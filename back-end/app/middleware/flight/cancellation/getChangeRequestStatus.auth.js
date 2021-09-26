exports.verifyChangeRequestStatus = (req, res, next) => {
    if (req.body.EndUserIp === undefined
        || req.body.ChangeRequestId === undefined) {
        return res.status(201).send({
            message: "Data request is should be not empty"
        });
    }
    next();
}