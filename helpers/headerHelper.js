exports.getContentCharset = (headers) => {
    if (headers["content-type"] && headers["content-type"].split(";") && headers["content-type"].split(";").length > 1) {
        return headers["content-type"].split(";")[1].split("=")[1]
    }
    return "";
};
