import * as cheerio from "cheerio";
import * as fs from "fs";

let url = "https://quotes.toscrape.com/";
const result = [];

async function parsing() {
  // 비동기로 우선 해당 페이지 fetch
  const response = await fetch(url);
  //
  const $ = cheerio.load(await response.text());
  // quote 클래스의 정보에 저자 등의 내용이 있기 때문에, 이들만 lists에 넣기
  const lists = $(".quote");
  // 리스트들 번갈아가면서 데이터 가공하기
  for (let i = 0; i < lists.length; i++) {
    const quote = lists.eq(i).find(".text").text().slice(1, -2);
    const author = lists.eq(i).find(".author").text();
    const tagList = lists.eq(i).find(".tag"); // 태그들이 들어간 배열
    const tags = [];
    tagList.each((j, tagEl) => {
      tags.push($(tagEl).text());
    });

    //
    // 저자 about 페이지 이동 후 설명 가져오기
    // 위와 같은 방법으로 진행
    // about url에는 a 태그가 하나뿐이라 find로 이를 찾고, href 속성을 검색
    const about_url =
      "https://quotes.toscrape.com" + lists.eq(i).find("a").attr("href");

    const about_response = await fetch(about_url);
    const d = cheerio.load(await about_response.text());
    const description = d(".author-description").text().trim();
    result.push({ quote, author, tags, description });
  }

  // 다음 페이지가 있는지 확인
  const nextPageLink = $(".pager .next a").attr("href");
  // 만약 있으면 다음 페이지 링크로 이동
  if (nextPageLink) {
    url = "https://quotes.toscrape.com" + nextPageLink;
  } else {
    return false;
  }

  return true;
}

(async () => {
  // 끝 페이지 도달할 때까지 반복
  let isEnd = true;
  while (isEnd) {
    isEnd = await parsing();
  }
  // 파일에 저장
  try {
    await fs.promises.writeFile("pt1.json", JSON.stringify(result, null, 1));
    console.log("파일 저장을 완료했습니다.");
  } catch (error) {
    console.error("파일 저장에 실패했습니다.", error);
  }
})();

// // 캐싱 버전
// import * as cheeio from "cheerio";
// import * as fs from "fs";

// const baseUrl = "https://quotes.toscrape.com/";

// const authorDescCache = {
//   // key: url
//   // value: authorDesc
// };

// // 메모리제이션 과정
// async function fetchAuthorDesc(authorHref) {
//   if (authorDescCache[authorHref]) {
//     return authorDescCache[authorHref];
//   }
//   const authorUrl = baseUrl + authorHref;
//   const authorResp = await fetch(authorUrl);
//   const authroHtml = await authorResp.text();
//   const $author = cheeio.load(authroHtml);
//   const authorDescription = $author(".author-description").text().trim();

//   authorDescCache[authorHref] = authorDescription;

//   return authorDescription;
// }

// async function main() {
//   const result = [];
//   let url = baseUrl;

//   while (true) {
//     // 1. request -> response
//     const response = await fetch(url);
//     const html = await response.text();
//     // 2. response를 parsing
//     const $ = cheeio.load(html);
//     // 3. (quote:string, authorName:string, tags:string[])
//     const quoteTags = $(".quote");

//     for (let i = 0; i < quoteTags.length; i++) {
//       const quoteTag = quoteTags.eq(i);

//       const quote = quoteTag.find(".text").text().trim();
//       const authorName = quoteTag.find(".author").text().trim();
//       const authorHref = quoteTag.find("span a").attr("href");
//       const authorDescription = await fetchAuthorDesc(authorHref);

//       const tags = [];

//       const tagTags = quoteTag.find(".tag");
//       for (let j = 0; j < tagTags.length; j++) {
//         const tagText = tagTags.eq(j).text().trim();
//         tags.push(tagText);
//       }

//       result.push({
//         quote,
//         authorName,
//         tags,
//         authorDescription,
//       });
//     }

//     const nextATag = $(".next a");
//     const href = nextATag.attr("href");
//     if (!href) {
//       break;
//     }
//     url = baseUrl + href;
//   }

//   // 4. json으로 저장
//   // JS => JSON문자열로 변환
//   const jsonResult = JSON.stringify(result);
//   await fs.promises.writeFile("quote3.json", jsonResult);
// }

// main();
