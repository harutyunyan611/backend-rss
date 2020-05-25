const HttpResponse = require("./HttpResponseHandler");
const {NotFoundException} = require("../app/exceptions/NotFoundException");
const {BadRequestException} = require("../app/exceptions/BadRequestException");
const Exception = require("../app/exceptions/Exception");

module.exports = (res, err) => {
    let httpCode = HttpResponse.INTERNAL_SERVER_ERROR.code;
    let errorMessage = HttpResponse.INTERNAL_SERVER_ERROR.message;
    let errorCode = httpCode;
    if (err instanceof Exception) {

        errorMessage = err.getMessage();
        errorCode = err.getCode();

        if (err instanceof NotFoundException) {
            httpCode = HttpResponse.NOT_FOUND.code;
        } else if (err instanceof BadRequestException) {
            httpCode = HttpResponse.BAD_REQUEST.code;
        }

        if (httpCode === HttpResponse.INTERNAL_SERVER_ERROR.code) {
            httpCode = err.getCode();
        }
    }
    let result = {
        status: httpCode,
        details: {
            code: errorCode,
            message: errorMessage
        }
    };

    res.status(httpCode).send(result);
};
