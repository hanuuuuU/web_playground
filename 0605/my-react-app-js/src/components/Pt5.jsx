import { useState } from "react";

export default function Pt5() {
  const [ban, setBan] = useState([]);
  const [comment, setComment] = useState([]);

  // 금지어 추가
  function addBan() {
    const newBan = document.getElementById("inputBan").value.trim();
    if (newBan) {
      setBan([newBan, ...ban]);
      document.getElementById("inputBan").value = "";
    }
  }

  // 사용자 댓글 추가
  function addCom() {
    const newComment = document.getElementById("inputComment").value.trim();
    if (newComment) {
      setComment([newComment, ...comment]);
      document.getElementById("inputComment").value = "";
    }
  }

  // 금지어 필터링 함수
  function filterComment(text) {
    let result = text;
    ban.forEach((word) => {
      const regex = new RegExp(word, "g");
      result = result.replace(regex, "**");
    });
    return result;
  }

  return (
    <div
      style={{
        width: "80vw",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {/* 사용자 입력 영역 */}
      <div>
        <div>
          <p>사용자 입력</p>
          <input type="text" id="inputComment" />
          <button onClick={addCom}>추가</button>
          <ul>
            {comment.map((com, idx) => (
              <li key={idx}>{filterComment(com)}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* 금지어 입력 영역 */}
      <div>
        <div>
          <p>금지어 입력</p>
          <input type="text" id="inputBan" />
          <button onClick={addBan}>추가</button>
          <ul>
            {ban.map((word, idx) => (
              <li key={idx}>{word}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// import { useState } from "react";

// export default function BannedWordPage() {
//   // 1. 금지어 입력받아서 금지어 배열로 저장.
//   //    1.1. input에 사용자입력을 받는다.
//   //    1.2. Add(입력) 버튼을 클릭하면 금지어배열에 추가하여 저장한다.
//   //    1.3. 금지어배열은 반복을 통해 li태그로 렌더링한다.
//   const [banWordInput, setBanWordInput] = useState("");
//   const [banWords, setBanWords] = useState([]);
//   // 2. 사용자로부터 입력받아서 사용자입력 배열로 저장.
//   //    1.1. input에 사용자입력을 받는다.
//   //    1.2. Add(입력) 버튼을 클릭하면 사용자입력 배열에 추가하여 저장한다.
//   //    1.3. 사용자입력 배열은 반복을 통해 li태그로 렌더링한다.
//   const [userInput, setUserInput] = useState("");
//   const [userSentences, setUserSentences] = useState([]);

//   // 3. "사용자입력 배열"들을 반복돌아서 금지어에 해당하는 내용 필터링 후 렌더링
//   const renderFiltered = (sentences) => {
//     return sentences.map((sentence) => {
//       // 3. "사용자입력 배열"들을 반복돌아서 금지어에 해당하는 내용 필터링 후 렌더링
//       // for (let i = 0; i<banWords.length; i++){
//       //   //
//       // }
//       // reduce함수(callbackFn, initialValue)

//       // intialValue부터 시작해서 배열을 순회해서 callBackFn의 결과들을 누적하여 계산하여 결과값을 반환한다.

//       const result = banWords.reduce((prevResult, banWord) => {
//         return prevResult.replaceAll(banWord, "**");
//       }, sentence);

//       return <li>{result}</li>;
//     });
//   };

//   return (
//     <div
//       style={{
//         width: 500,
//         margin: "auto",
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-between",
//       }}
//     >
//       <div>
//         <h3>사용자 입력</h3>
//         <div>
//           <input
//             type="text"
//             onChange={(e) => {
//               setUserInput(e.target.value);
//             }}
//             value={userInput}
//           />
//           <button
//             onClick={() => {
//               // 1.2. Add(입력) 버튼을 클릭하면 사용자입력 배열에 추가하여 저장한다.
//               setUserSentences([...userSentences, userInput]);

//               setUserInput("");
//             }}
//           >
//             입력
//           </button>
//         </div>
//         <div>
//           <ul>{renderFiltered(userSentences)}</ul>
//         </div>
//       </div>

//       <div>
//         <h3>금지어 입력</h3>
//         <div>
//           <input
//             type="text"
//             onChange={(e) => {
//               setBanWordInput(e.target.value);
//             }}
//             value={banWordInput}
//           />
//           <button
//             onClick={() => {
//               // 1-2. 입력받는 banWordInput을 금지어 배열(banWords)에 추가
//               setBanWords([...banWords, banWordInput]);
//               setBanWordInput("");
//             }}
//           >
//             입력
//           </button>
//         </div>
//         <ul>
//           {banWords.map((banWord) => {
//             return <li>{banWord}</li>;
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// }
