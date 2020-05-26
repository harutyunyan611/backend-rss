const Transformer = require("../Transformer");
const Post = require("./relations/Post");

module.exports = class Rss extends Transformer {

    constructor(entity) {
        super(entity);
    }

    toSingle() {
        return {
            title: this.data.title,
            description: this.data.description,
            xmlUrl: this.data.feedurl,
            siteIcon: this.data.image && this.data.image.url,
            posts: new Post(this.data.items).toCollection()
        };
    }
};
