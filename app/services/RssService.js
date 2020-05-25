const Parser = require('rss-parser');

module.exports = class RssServie {
  constructor() {
    this.parser = new Parser();
  }

  fetchFeed() {
    return this.parser.parseURL('https://techcrunch.com/feed/');
  }
};
