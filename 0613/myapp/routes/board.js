const express = require("express");
const router = express.Router();
const Board = require("../models/Board"); // 모델 불러오기

/**
 * 특정 자원에 대한 API
 * GET  / : 전체 리소스 조회
 * POST / : 리소스 등록
 *
 * GET      /:resourceId : 특정 resource 조회
 * PUT      /:resourceId : 특정 resource 수정
 * DELETE   /:resourceId : 특정 resource 삭제
 */

router.get("/", async function (req, res, next) {
  /**
   * req: 요청
   * res: 응답
   * next: middleware 실행
   */
  console.log("router /board 실행");
  const items = await Board.find().populate("comments");
  console.log(items);
  res.json(items);
});

router.post("/", async function (req, res) {
  /**
   * 1. req body로 '게시글 제목'과 '게시글 내용'을 받는다.
   * 2. mongoose를 이용해 저장한다.
   * 3. response를 만들어준다.
   */
  const data = req.body;
  console.log(data);
  const board = await Board.create({
    title: data.title,
    content: data.content,
  });
  res.json(board);
});

router.get("/:boardID", async function (req, res, next) {
  console.log(req.params);
  const { boardID } = req.params;
  const board = await Board.findById(boardID);
  res.json(board);
});

router.put("/:boardID", async function (req, res) {
  const { boardID } = req.params;
  const data = req.body;
  const { title, content } = data;
  const result = await Board.updateOne(
    {
      _id: boardID,
    },
    {
      title: title,
      content: content,
    }
  );
  if (result.acknowledged) {
    res.send("update complete");
  } else {
    res.send("no data");
  }
});

router.delete("/:boardID", async function (req, res) {
  const { boardID } = req.params;
  const result = await Board.deleteOne({
    _id: boardID,
  });
  if (result.acknowledged) {
    res.send("delete complete");
  } else {
    res.send("no data");
  }
});

module.exports = router;
