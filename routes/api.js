const iconv = require("iconv-lite");
const Iconv = require("iconv").Iconv;
const axios = require('axios').default;
const request = require("request");


const RssController = require("../app/controllers/RssController");
const AuthMiddleware = require("../app/middlewares/AuthMiddleware");

const routeBind = require("../helpers/RouteBind");

const express = require("express");
const router = express.Router();

const FetchFeedRequest = require("../app/requests/FetchFeedRequest");

router.get("/feed",
    AuthMiddleware,
    routeBind(RssController, "fetchFeed", FetchFeedRequest)
);

module.exports = router;
