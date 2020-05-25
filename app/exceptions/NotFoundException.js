const HttpResponse = require("../../helpers/HttpResponseHandler");
const Exception = require("./Exception");

module.exports = class NotFoundException extends Exception {
    constructor(msg, code) {
        if (typeof msg === undefined && typeof code === undefined) {
            super(HttpResponse.NOT_FOUND.message, HttpResponse.NOT_FOUND.code);
        } else {
            super(msg, code);
        }
    }
};
