import * as cheerio from "cheerio";
import * as fs from "fs";
import iconv from "iconv-lite";

const url = "https://finance.naver.com/item/news.nhn?code=005930";
let res = [];
(async () => {
  const response = await fetch(url);
  const stock_html = await response.text();
  let $ = cheerio.load(stock_html);

  const daily = $(".section.inner_sub > iframe");
  const if_url = "https://finance.naver.com" + daily.eq(1).attr("src");
  const response2 = await fetch(if_url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
    },
  });
  const buffer = await response2.arrayBuffer();
  const decoded = iconv.decode(Buffer.from(buffer), "euc-kr");

  $ = cheerio.load(decoded);

  const row_set = $(".type6 > tbody");

  for (let i = 0; i < 2; i++) {
    const rows = row_set.eq(i).find("tr");
    for (let j = 0; j < rows.length; j++) {
      const title = rows.eq(j).find("a").text();
      const addresss = rows.eq(j).find("a").attr("href");
      const company = rows.eq(j).find(".info").text();
      const date = rows.eq(j).find(".date").text();

      res.push({ title, addresss, company, date });
    }
  }

  try {
    await fs.promises.writeFile("pt5.json", JSON.stringify(res, null, 1));
    console.log("파일 저장을 완료했습니다.");
  } catch (error) {
    console.error("파일 저장에 실패했습니다.", error);
  }
})();
