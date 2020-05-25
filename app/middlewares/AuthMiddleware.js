const ErrorHandler = require("../../helpers/ErrorHandler");
const {InternalServerException} = require("../exceptions/InternalServerException");

module.exports = async (req, res, next) => {
    try {
        if (true) {
            next();
        } else {
            // throw new InvalidCredentialsException();
            throw new InternalServerException();
        }
    } catch (e) {
        if (e.getCode === undefined) {
            ErrorHandler.sendErrorStatus(res, new InternalServerException());
        } else {
            ErrorHandler.sendErrorStatus(res, e);
        }
    }
}
