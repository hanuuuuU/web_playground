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
