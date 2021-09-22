exports.verifySearchData = (req, res, next) => {
    if (req.body.EndUserIp === undefined
        || req.body.AdultCount === undefined
        || req.body.ChildCount === undefined
        || req.body.InfantCount === undefined
        || req.body.JourneyType === undefined) {
        return res.status(201).send({
            code: 3,
            message: "Data request is should be not empty"
        });
    }

    const segmentData = req.body.Segments;

    for (let i = 0; i < segmentData.length; i++) {
        if (segmentData[i].Origin === undefined
            || segmentData[i].Destination === undefined
            || segmentData[i].FlightCabinClass === undefined
            || segmentData[i].PreferredDepartureTime === undefined
            || segmentData[i].PreferredArrivalTime === undefined) {
                console.log(segmentData[i].Origin === undefined);
            return res.status(201).send({
                code: 4,
                message: "Data request is should be not empty"
            });
        }
    }

    next();
}