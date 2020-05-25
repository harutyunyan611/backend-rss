const BaseController = require("./BaseController");
const {InternalServerException} = require("../exceptions/InternalServerException");
const HttpResponse = require("../../helpers/HttpResponseHandler");

module.exports = class RssController extends BaseController {
    constructor() {
        super();
    }

    fetchFeed(req, res) {
        req.validate();
        try {
            this.response(res, HttpResponse.OK, "ASD");
        } catch (e) {
            this.catchError(e, res, new InternalServerException());
        }
    }
}
