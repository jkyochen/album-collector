"use strict";

const axios = require("axios");
const faker = require("faker");
faker.locale = "zh_CN";
const parse = require("node-html-parser").parse;

async function crawlDouban(url) {
    let res = await axios.get(url, {
        headers: {
            "User-Agent": faker.internet.userAgent(),
        },
    });
    return res.data;
}

module.exports = async function (url) {
    if (!url.includes("douban")) {
        return {
            error: "don't crawl support this url"
        }
    }
    let code = await crawlDouban(url);
    let root = parse(code);
    let track = root.querySelector("div.track-list").text.trim()
    return {
        "singerName": root.querySelector("span.pl a").text,
        "albumName": root.querySelector("h1 span").text,
        "cover_url": root.querySelector("div.rec-sec a").getAttribute("data-image"),
        "tracks": track.split(/\d+\./).slice(1)
    }
}
