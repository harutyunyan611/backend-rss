const sendErrorStatus = require("../../helpers/ErrorHandler");

module.exports = class BaseController {
    response(res, httpResponse, resData = {}) {
        res.setHeader('Content-Type', 'application/json');
        return res.status(httpResponse.code).send(resData);
    }

    catchError(e, res, exception) {
        if (e.getCode === undefined) {
            sendErrorStatus(res, exception);
        } else {
            sendErrorStatus(res, e);
        }
    }
};
