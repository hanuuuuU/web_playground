import { useState, useRef, useEffect } from "react";
import "./App.css";
import ContextExample from "./components/ContextExample/ContextExample";
import BootstrapExample from "./components/ContextExample/BootstrapExample";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/Pt9Comps/TodoInput";
import ColorBar from "./components/Pt9Comps/ColorBar";
import TodoList from "./components/Pt9Comps/TodoList";
import SearchData from "./components/Pt9Comps/SearchData";
import { v4 as uuid4 } from "uuid";
function App() {
  const inputRef = useRef(null);
  const [searchKey, setSearchKey] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [inputArr, setInputArr] = useState([]);
  const [backColor, setBackColor] = useState("white");

  // 입력 받고 입력 버튼 누르면 Arr에 추가하기
  function addItem() {
    const inpTxt = inputRef.current.value;
    // setInputArr([...inputArr, {id:inputArr.length, text: inpTxt, color: backColor }]);
    // localStorage.setItem(
    //   "json",
    //   JSON.stringify([...inputArr, { text: inpTxt, color: backColor }])

    // 훅은 비동기다. 그렇기 때문에 setInputArr이 지금 당장이 아닌 어디선가 수행된다
    // 그렇기 때문에 아래와 같은 식으로 변수 하나에 넣고, 사용하는 수 밖에 없다.
    // uuid를 사용해서 랜덤 아이디 값을 만들었음.(심화4)
    const newArr = [
      ...inputArr,
      { id: uuid4(), text: inpTxt, color: backColor },
    ];
    setInputArr(newArr);
    localStorage.setItem("json", JSON.stringify(newArr));
  }

  // 심화2) 검색 기능
  // input 값이 변경될 때마다 바로바로 수행
  useEffect(() => {
    setSearchList(
      inputArr.filter((item) =>
        item.text.toLowerCase().includes(searchKey.toLowerCase())
      )
    );
  }, [inputArr, searchKey]);

  // 심화3) 로컬 스토리지에서 데이터 불러오기
  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("json"));
    if (Array.isArray(storageData)) {
      setInputArr(storageData);
    }
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>Todo App</h2>
      <TodoInput inputRef={inputRef} addItem={addItem} backColor={backColor} />
      <SearchData data={setSearchKey} />
      <ColorBar setBackColor={setBackColor} />
      <h2 style={{ paddingTop: 50 }}>Todo Items</h2>
      <TodoList
        filterItems={searchList}
        setItems={setInputArr}
        originItems={inputArr}
      />
    </div>
  );
}

export default App;
