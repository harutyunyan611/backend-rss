const Validator = require("validatorjs");
const ValidationException = require("../exceptions/ValidationException");

module.exports = class BaseRequest {
    constructor(request) {
        this.request = request;
    }

    validate() {
        const validation = new Validator(this.validationData(), this.rules());

        if (validation.fails()) {
            throw new ValidationException(validation.errors);
        }

        return this;
    }

    rules() {
        return {};
    }

    validationData() {
        return { ...this.request.body, ...this.request.query };
    }
};
