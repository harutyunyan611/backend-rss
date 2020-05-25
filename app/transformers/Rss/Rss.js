const Transformer = require("../Transformer");
const Post = require("./relations/Post");

module.exports = class Rss extends Transformer {

    constructor(entity) {
        super(entity);
    }

    toSingle() {
        console.log(Object.keys(this.data));
        // 'items',
        //     'feedUrl',
        //     'image',
        //     'title',
        //     'description',
        //     'generator',
        //     'link',
        //     'language',
        //     'lastBuildDate'
        return {
            title: this.data.title,
            description: this.data.description,
            xmlUrl: this.data.feedurl,
            siteIcon: this.data.image.url,
            posts: new Post(this.data.items).toCollection()
        };
    }
};
