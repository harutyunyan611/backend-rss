const {sendErrorStatus} = require("../../helpers/ErrorHandler");

module.exports = class BaseController {
    response(res, httpResponse, resData = {}) {
        return res.status(httpResponse.code).send(resData);
    }

    catchError(e, res, exception) {
        console.log(e);
        if (e.getCode === undefined) {
            sendErrorStatus(res, exception);
        } else {
            sendErrorStatus(res, e);
        }
    }
};
