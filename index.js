const http = require("http");
const env = require("dotenv");
env.config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const path = require("path");
const fs = require("fs");
const routerApi = require("./routes/api");

const app = express();

app.set("views", path.join(__dirname, "./app/views"));
app.use(bodyParser.json({limit: "100mb"}));
app.use(bodyParser.urlencoded({limit: "100mb", extended: true}));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "./public")));

app.use((req, res, next) => {
    process.env = env.config().parsed || {};
    next();
});

app.use("/api", routerApi);

const server = http.createServer(app);

const port = (process.env.PORT || 3009);

server.listen(port); // WARNING PUT IT IN ENV

