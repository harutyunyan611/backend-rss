const Transformer = require("../../Transformer");

module.exports = class Post extends Transformer {

    constructor(entity) {
        super(entity);
    }

    toSingle() {
        return {
            id: this.data.id,
            title: this.data.title,
            link: this.data.link,
            description: this.data.content,
            plainDescription: this.contentSnippet,
            author: this.data.author,
            category: this.data.categories || [],
            pubDate: this.data.date
        };
    }
};
