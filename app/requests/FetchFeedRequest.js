const BaseRequest = require("../requests/BaseRequest");

module.exports = class FetchFeedRequest extends BaseRequest {
    getUrl() {
        return this.request.query.url;
    }

    rules() {
        return {
            url: "required|string",
        };
    }
};
