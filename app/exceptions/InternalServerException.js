const HttpResponse = require("../../helpers/HttpResponseHandler");
const Exception = require("./Exception");

module.exports = class InternalServerException extends Exception {
    constructor() {
        super(HttpResponse.INTERNAL_SERVER_ERROR.message, HttpResponse.INTERNAL_SERVER_ERROR.code);
    }
};
