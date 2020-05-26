const Parser = require('rss-parser');

module.exports = class RssServie {
  constructor() {
    this.parser = new Parser();
  }

  fetchFeed(url) {
    return this.parser.parseURL(url);
  }
};
