const Transformer = require("../../Transformer");

module.exports = class Post extends Transformer {

    constructor(entity) {
        super(entity);
    }

    toSingle() {
        const description = this.data.content || (this.data.mediaData && this.data.mediaData["media:description"] && this.data.mediaData["media:description"][0]);
        return {
            id: this.data.id,
            title: this.data.title,
            link: this.data.link,
            description,
            plainDescription: this.contentSnippet || description,
            author: this.data.author,
            category: this.data.categories || [],
            pubDate: this.data.date,
            thumbnail: this.data.thumbnail
        };
    }
};
