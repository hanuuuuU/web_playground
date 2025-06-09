import { useState, useEffect, useRef } from "react";

export default function Pt9() {
  const inputRef = useRef(null);
  const [inputArr, setInputArr] = useState([]);
  const [backColor, setBackColor] = useState("white");

  // 입력 받고 입력 버튼 누르면 Arr에 추가하기
  function addItem() {
    const inpTxt = inputRef.current.value;
    setInputArr([...inputArr, { text: inpTxt, color: backColor }]);
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>Todo App</h2>
      <div>
        <input
          type="text"
          ref={inputRef}
          style={{ backgroundColor: backColor }}
        />
        <button onClick={addItem}>입력</button>
      </div>
      <div>
        {/* 색 버튼 누르면 인풋박스 색 바뀌도록 하기 */}
        <button
          onClick={() => {
            setBackColor("white");
          }}
          style={{ backgroundColor: "white" }}
        >
          w
        </button>
        <button
          onClick={() => setBackColor("red")}
          style={{ backgroundColor: "red" }}
        >
          r
        </button>
        <button
          onClick={() => {
            setBackColor("yellow");
          }}
          style={{ backgroundColor: "yellow" }}
        >
          y
        </button>
        <button
          onClick={() => {
            setBackColor("pink");
          }}
          style={{ backgroundColor: "pink" }}
        >
          p
        </button>
      </div>
      <h2 style={{ paddingTop: 50 }}>Todo Items</h2>
      <ul style={{ paddingLeft: 0 }}>
        {/* 아이템 출력하기 */}
        {inputArr.map((data, idx) => {
          return (
            <li
              key={idx}
              style={{
                backgroundColor: data.color,
                width: 250,
                listStyleType: "none",
                marginBottom: 10,
              }}
            >
              {data.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
