const HttpResponse = require("../../helpers/HttpResponseHandler");
const Exception = require("./Exception");

module.exports = class ValidationException extends Exception {
    constructor(msg = HttpResponse.VALIDATION_ERROR.message) {
        super(msg, HttpResponse.VALIDATION_ERROR.code);
    }
}
