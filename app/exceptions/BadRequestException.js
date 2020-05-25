const HttpResponse = require("../../helpers/HttpResponseHandler");
const Exception = require("./Exception");

module.exports = class BadRequestException extends Exception {
    constructor(msg, code) {
        if (msg === undefined && code === undefined) {
            super(HttpResponse.BAD_REQUEST.message, HttpResponse.BAD_REQUEST.code);
        } else {
            super(msg, code);
        }
    }
};
