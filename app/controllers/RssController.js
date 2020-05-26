const BaseController = require("./BaseController");
const InternalServerException = require("../exceptions/InternalServerException");
const HttpResponse = require("../../helpers/HttpResponseHandler");
const RssService = require("../services/RssService");
const Rss = require("../transformers/Rss/Rss");

module.exports = class RssController extends BaseController {
    constructor() {
        super();
        this.rssService = new RssService();

        this.fetchFeed = this.fetchFeed.bind(this);
    }

    async fetchFeed(req, res) {
        try {
            req.validate();
            const data = await this.rssService.fetchFeed(req.getUrl());
            this.response(res, HttpResponse.OK, new Rss(data).toSingle());
        } catch (e) {
            console.log(e);
            this.catchError(e, res, new InternalServerException());
        }
    }
};
