import * as cheerio from "cheerio";
import * as fs from "fs";

const url =
  "https://search.daum.net/search?w=news&nil_search=btn&DA=NTB&enc=utf8&cluster=y&cluster_page=1&q=금융+서비스&p=1";
let res = [];
(async () => {
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);

  let url_list = $(".card_comp .c-list-basic > li");
  for (let i = 0; i < url_list.length; i++) {
    const art_url = url_list.eq(i).find(".tit-g.clamp-g > a").attr("href");

    const response2 = await fetch(art_url);
    const content = await response2.text();

    res.push(content);
  }

  // 파일에 저장
  try {
    await fs.promises.writeFile("pt3.html", res);
    console.log("파일 저장을 완료했습니다.");
  } catch (error) {
    console.error("파일 저장에 실패했습니다.", error);
  }
})();

// import * as cheerio from "cheerio";

// async function scrapeDaumNews(query, page) {
//   const baseUrl = "https://search.daum.net/search";
//   const url = `${baseUrl}?q=${query}&p=${page}&w=news`;

//   const resp = await fetch(url);
//   const html = await resp.text();
//   fs.writeFileSync(`${query}-${page}.html`, html);

//   const $ = cheerio.load(html);

//   const newsListTags = $(".c-list-basic > li");

//   const result = [];

//   for (let i = 0; i < newsListTags.length; i++) {
//     const target = newsListTags.eq(i);

//     const press = target.find(".tit_item").text().trim();
//     const titleTag = target.find(".c-item-content .item-title a");
//     const descTag = target.find(".item-contents .conts-desc");
//     const dateTag = target.find(".gem-subinfo");

//     const imageTag = target.find(".item-thumb img");
//     // const imageSrc = imageTag.attr("src");
//     const imageSrc = imageTag.attr("data-original-src");

//     if (!titleTag.text()) {
//       continue;
//     }

//     result.push({
//       press: press,
//       title: titleTag.text().trim(),
//       url: titleTag.attr("href"),
//       desc: descTag.text().trim(),
//       date: dateTag.text().trim(),
//       image: imageSrc,
//     });
//   }
//   return result;
// }
// import * as fs from "fs";

// async function main() {
//   const result = [];
//   for (let p = 1; p <= 3; p++) {
//     const data = await scrapeDaumNews("금융서비스", p);
//     result.push(data);
//   }
//   fs.writeFileSync("./daum-news1.json", JSON.stringify(result));
//   console.log(result);
// }

// main();
