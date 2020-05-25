const RssController = require("../app/controllers/RssController");
const AuthMiddleware = require("../app/middlewares/AuthMiddleware");

const routeBind = require("../helpers/RouteBind");

const express = require("express");
const router = express.Router();

const BaseRequest = require("../app/requests/BaseRequest");

router.get("/feed",
    AuthMiddleware,
    routeBind(RssController, "fetchFeed", BaseRequest)
);

module.exports = router;
