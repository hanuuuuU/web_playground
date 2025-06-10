import { useState } from "react";

export default function TodoList({ filterItems, setItems, originItems }) {
  const [modify, setModify] = useState(false);
  const [nowEdit, setNowEdit] = useState("");
  const [text, setText] = useState("");

  return (
    <ul style={{ paddingLeft: 0 }}>
      {filterItems.map((data, idx) => (
        <div
          key={data.id}
          style={{
            display: "flex",
            height: 30,
            backgroundColor: data.color,
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          {/* 수정 버튼을 안눌렀을 때는 li태그 안에 {data.text}를 보여주고
          눌렸을 때는 li 태그 안에 input 박스를 넣어주도록 하자
          그렇다면 해야될 일은?
          1. 수정 버튼이 눌렸을 때 자동으로 동작할 수 있도록 useState를 사용하자
          (useState는 어떻게 해야하지..? 배열로 해볼까)
          ㄴ놉. useState 문자열 변수 하나만 해서, 현재 li의 id 값 넣기
          ㄴ그리고 이거를 가지고 선택 li만 로직 수행
          2. 그럼 수정 중에는 버튼을 '확인'으로 바꿔야겠다
          3. 확인 버튼을 누르면 inputArr에서 해당 id값을 찾아 바꿔주기
          4. 스토리지에도 업데이트 */}
          <li
            style={{
              width: 250,
              listStyleType: "none",
            }}
          >
            {nowEdit === data.id && modify ? (
              <input
                type="text"
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
            ) : (
              data.text
            )}
          </li>
          {nowEdit === data.id && modify ? (
            <button
              style={{ height: 30, padding: 6, fontSize: 12 }}
              onClick={() => {
                console.log(data.id);
                let findIdx = originItems.findIndex(
                  (item) => item.id === nowEdit
                );
                let copiedItems = [...originItems];
                copiedItems[findIdx].text = text;
                setItems(copiedItems);
                setModify(!modify);
                localStorage.setItem("json", JSON.stringify(copiedItems));
              }}
            >
              확인
            </button>
          ) : (
            <button
              style={{ height: 30, padding: 6, fontSize: 12 }}
              onClick={() => {
                setText(data.text);
                setNowEdit(data.id);
                setModify(!modify);
              }}
            >
              수정
            </button>
          )}

          <button
            //심화4
            // 삭제 버튼을 누르면
            // inputArr에서 해당 값을 찾아서 삭제
            // 여기서 문제점-> id를 어떻게 설정하고, 찾을건데?
            // 입력 값을 아이디로 하면, 같은 입력 값이 있을 때 id가 같아지는 문제가 있잖아
            // inputArr최신화 시키기, 로컬 스토리지도 업데이트 해주기
            // 그에 맞춰서 SearchList도 최신화 시키기(근데 이건 useEffect에 이미 구현)
            onClick={() => {
              const newList = originItems.filter((item) => item.id != data.id);
              setItems(newList);
              localStorage.setItem("json", JSON.stringify(newList));
            }}
            style={{ height: 30, padding: 6, fontSize: 12 }}
          >
            삭제
          </button>
        </div>
      ))}
    </ul>
  );
}
