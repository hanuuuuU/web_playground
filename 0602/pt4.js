import * as cheerio from "cheerio";
import * as fs from "fs";
import iconv from "iconv-lite";

const url = "https://finance.naver.com/item/sise.nhn?code=005930";
const res = [];
(async () => {
  // 페이지 parsing 하여 일별 시세 iframe 찾기
  const response = await fetch(url);
  const stock_html = await response.text();
  let $ = cheerio.load(stock_html);

  const daily = $(".section.inner_sub > iframe");
  const if_url = "https://finance.naver.com" + daily.eq(1).attr("src");

  // iframe 내 html 파일 parsing
  // 네이버 금융의 iframe 페이지는 브라우저가 아닌 봇/스크립트로 접근할 때 콘텐츠를 제대로 내려주지 않도록 되어 있습니다.
  // 즉, fetch 요청 시 User-Agent나 Referer 등의 headers가 적절히 설정되어 있지 않으면, 다른 내용(또는 빈 페이지)을 응답합니다.
  // 그래서 User-Agent 저 부분 넣음ㅜㅠㅜㅜㅜㅜ
  const response2 = await fetch(if_url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
    },
  });
  const buffer = await response2.arrayBuffer();
  const decoded = iconv.decode(Buffer.from(buffer), "euc-kr");

  $ = cheerio.load(decoded);

  const daily_list = $(".type2 > tbody > tr");

  daily_list.each((i, el) => {
    const tds = $(el).find("td");
    if (tds.eq(0).text() != "") {
      const date = tds.eq(0).text().trim();
      const close = tds.eq(1).text().trim();
      const diff = tds.eq(2).text().trim();
      const open = tds.eq(3).text().trim();
      const high = tds.eq(4).text().trim();
      const low = tds.eq(5).text().trim();
      const volume = tds.eq(6).text().trim();

      res.push({ date, close, diff, open, high, low, volume });
    }
  });

  try {
    await fs.promises.writeFile("pt4.json", JSON.stringify(res, null, 1));
    console.log("파일 저장을 완료했습니다.");
  } catch (error) {
    console.error("파일 저장에 실패했습니다.", error);
  }
})();

// import * as cheerio from "cheerio";
// import * as fs from "fs";
// async function scrapeSise(stockCode) {
//   const url = `https://finance.naver.com/item/sise_day.naver?code=${stockCode}`;
//   const resp = await fetch(url, {
//     headers: {
//       "user-agent":
//         "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
//     },
//   });
//   const html = await resp.text();
//   const result = [];

//   const $ = cheerio.load(html);
//   const trTags = $("table.type2 tr[onmouseover]");
//   for (let i = 0; i < trTags.length; i++) {
//     const tr = trTags.eq(i);
//     // console.log(tr.text());
//     const tdTags = tr.find("td");
//     result.push({
//       date: tdTags.eq(0).text(),
//       close: tdTags.eq(1).text(),
//       open: tdTags.eq(3).text(),
//       high: tdTags.eq(4).text(),
//       low: tdTags.eq(5).text(),
//       volume: tdTags.eq(6).text(),
//     });
//   }
//   fs.writeFileSync("./naver-sise.json", JSON.stringify(result));
// }

// scrapeSise("005930");
