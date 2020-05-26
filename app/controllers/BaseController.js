const sendErrorStatus = require("../../helpers/ErrorHandler");

module.exports = class BaseController {
    response(res, httpResponse, resData = {}) {
        // res.setHeader('Content-Type', 'application/json');
        res.set({ 'content-type': 'application/json; charset=utf-8' });
        res.header("Access-Control-Allow-Origin", "*");
        return res.status(httpResponse.code).send(resData);
    }

    catchError(e, res, exception) {
        res.setHeader('Content-Type', 'application/json');
        res.header("Access-Control-Allow-Origin", "*");
        if (e.getCode === undefined) {
            sendErrorStatus(res, exception);
        } else {
            sendErrorStatus(res, e);
        }
    }
};
