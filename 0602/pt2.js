import * as cheerio from "cheerio";
import * as fs from "fs";

let url =
  "https://search.daum.net/search?w=news&nil_search=btn&DA=NTB&enc=utf8&cluster=y&cluster_page=1&q=금융+서비스";

let result = [];

(async () => {
  for (let i = 1; i < 4; i++) {
    // Daum뉴스탭의 URL을 분석한다.
    // 해당 URL에 Request를 보낸다.
    const page_url = url + `&p=${i}`;
    const response = await fetch(page_url);

    const html = await response.text();

    const $ = cheerio.load(html);
    const news = $(".card_comp .c-list-basic > li");
    news.each((j, el) => {
      const company = $(el).find(".c-tit-doc").find(".txt_info").text();
      const title = $(el).find(".item-title").text().trim();
      const short_script = $(el).find(".conts-desc.clamp-g2").text().trim();
      const date = $(el).find(".gem-subinfo").find(".txt_info").text();
      const news_link = $(el).find(".conts-desc.clamp-g2 a").attr("href");
      const art_img = $(el)
        .find(".wrap_thumb > a > img")
        .attr("data-original-src");
      result.push({ company, title, short_script, date, news_link, art_img });
    });
  }

  // 파일에 저장
  try {
    await fs.promises.writeFile("pt2.json", JSON.stringify(result, null, 1));
    console.log("파일 저장을 완료했습니다.");
  } catch (error) {
    console.error("파일 저장에 실패했습니다.", error);
  }

  // 가져올 데이터 (제목, 신문사, 요약설명, 날짜, URL)
  // Parsing하여 문서 구조를 분석한다.
  // 해당하는 문서에 원하는 값들을 뽑아서 저장한다. (JSON으로 저장한다.)
})();
