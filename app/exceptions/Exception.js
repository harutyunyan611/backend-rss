module.exports = class Exception {
    constructor(message, code = 500) {
        this.message = message;
        this.code = code;
    }
    getCode() {
        return this.code;
    }
    getMessage() {
        return this.message;
    }
};
