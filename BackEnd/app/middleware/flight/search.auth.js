exports.verifySearchData = (req, res, next) => {
    if (!req.body.EndUserIp
        || !req.body.AdultCount
        || !req.body.ChildCount
        || !req.body.InfantCount
        || !req.body.JourneyType) {
        return res.status(201).send({
            code: 3,
            message: "Data request is should be not empty"
        });
    }

    const segmentData = req.body.Segments;

    for (let i = 0; i < segmentData.length; i++) {
        if (!segmentData[i].Origin
            || !segmentData[i].Destination
            || !segmentData[i].FlightCabinClass
            || !segmentData[i].PreferredDepartureTime
            || !segmentData[i].PreferredArrivalTime) {
                console.log(segmentData[i].Origin);
            return res.status(201).send({
                code: 4,
                message: "Data request is should be not empty"
            });
        }
    }

    next();
}