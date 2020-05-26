const Parser = require('rss-parser');
const request = require('request');
const Iconv = require("iconv").Iconv;
const cheerio = require('cheerio');
const getBaseUrl = require("../../helpers/urlHelper").getBaseUrl;
const getContentCharset = require("../../helpers/headerHelper").getContentCharset;

module.exports = class RssServie {
  constructor() {
    this.parser = new Parser({
      requestOptions: {

      },
      customFields: {
        item: [
          ['media:group', 'mediaData'],
        ]
      }
    });
  }

  async fetchThumbnail(url) {
    return new Promise((resolve, reject) => {
      request({
        uri: url,
        method: 'GET',
        encoding: 'binary'
      }, function (error, response, body) {
        if (getContentCharset(response.headers) === "windows-1251") {
          body = new Buffer(body, 'binary');
          const conv = Iconv('windows-1251', 'utf8');
          body = conv.convert(body).toString();
        }
        if (error)
          reject(error);
        const $ = cheerio.load(body);
        let imgUrl = $('meta[property="og:image"]').attr("content");
        if (!imgUrl) {
          console.log($(".page img"), $(".page img").first().prop("src"));
          const fetchedSrc = $(".page img").first().prop("src");
          if (fetchedSrc) {
            if (fetchedSrc.startsWith("/")) {
              imgUrl = getBaseUrl(url) + fetchedSrc;
            } else {
              imgUrl = fetchedSrc;
            }
          }
        }
        resolve(imgUrl);
      });
    });
  }

  fetchSite(url) {
    return new Promise((resolve, reject) => {
      return request({
        uri: url,
        method: 'GET',
        encoding: 'binary'
      }, function (error, response, body) {
        if (error)
          reject(error);
        if (getContentCharset(response.headers) === "windows-1251") {
          body = new Buffer(body, "binary");
          const conv = Iconv("windows-1251", "utf8");
          body = conv.convert(body).toString();
        }
        resolve(body);
      });
    });
  }

  async fetchFeed(url) {
    const content = await this.fetchSite(url);
    const data = await this.parser.parseString(content);
    return this.normalizeData(data);
  }

  async normalizeData(data) {
    const items = [];
    for (let i = 0; i < data.items.length; i++) {
      let url;

      try {
        url = data.items[i].mediaData["media:thumbnail"][0]["$"]["url"];
      } catch (e) {
        url = await this.fetchThumbnail(data.items[i].link);
      }

      items.push({
        ...data.items[i],
        thumbnail: url
      });
    }

    return {
      ...data,
      items
    };
  }
};
