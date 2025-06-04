import * as fs from "fs";

// 이랬는데 틀렸던 거임
// const url = "https://www.wadiz.kr/web/wreward/main";

// let res = [];
// (async () => {
//   const response = await fetch(url);
//   const stock_html = await response.text();
//   let $ = cheerio.load(stock_html);

//   try {
//     await fs.promises.writeFile("pt6.html", stock_html);
//     console.log("파일 저장을 완료했습니다.");
//   } catch (error) {
//     console.error("파일 저장에 실패했습니다.", error);
//   }
//   // const items = $(".HomeHorizontalCard_container__QBqLW");
//   //console.log(items.length);
// })();

async function main() {
  const url = "https://service.wadiz.kr/api/search/funding";
  const body = {
    startNum: 0,
    order: "recommend",
    limit: 500,
    categoryCode: "",
    endYn: "",
    isMakerClub: false,
  };

  const resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "content-type": "application/json",
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
      referer: "https://www.wadiz.kr/",
    },
  });
  //   const data = await resp.text();
  //   const result = JSON.parse(data);

  const result = await resp.json();

  //   console.log(result.data.list.length);
  fs.writeFileSync("pt6.json", JSON.stringify(result.data.list));
}

main();
