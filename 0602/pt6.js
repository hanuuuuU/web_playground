import * as cheerio from "cheerio";
import * as fs from "fs";
import iconv from "iconv-lite";

const url = "https://www.wadiz.kr/web/wreward/main";
let res = [];
(async () => {
  const response = await fetch(url);
  const stock_html = await response.text();
  let $ = cheerio.load(stock_html);

  items = $(".HomeHorizontalCard_container__QBqLW");
})();
