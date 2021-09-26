const releasePnrRequestAuth = require('./releasePnrRequest.auth');
const getChangeRequestStatusAuth = require('./getChangeRequestStatus.auth');
const cancellationChargeAuth = require('./cancellationCharge.auth');

const cancellationAuth = {
    releasePnrRequestAuth: releasePnrRequestAuth.verifyReleasePnrRequestData,
    getChangeRequestStatusAuth: getChangeRequestStatusAuth.verifyChangeRequestStatus,
    cancellationChargeAuth: cancellationChargeAuth.verifyCancellationChargeData
}

module.exports = cancellationAuth;