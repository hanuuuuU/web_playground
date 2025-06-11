import { useState, useRef, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/Pt9Comps/TodoInput";
import ColorBar from "./components/Pt9Comps/ColorBar";
import TodoList from "./components/Pt9Comps/TodoList";
import SearchData from "./components/Pt9Comps/SearchData";
import { TodoProvider, useTodo } from "./components/Pt9Comps/TodoProvider";

function App() {
  // const inputRef = useRef(null);
  const [searchKey, setSearchKey] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [backColor, setBackColor] = useState("white");
  const { inputArr } = useTodo();

  // 심화2) 검색 기능
  // input 값이 변경될 때마다 바로바로 수행
  useEffect(() => {
    setSearchList(
      inputArr.filter((item) =>
        item.text.toLowerCase().includes(searchKey.toLowerCase())
      )
    );
  }, [inputArr, searchKey]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>Todo App</h2>
      <TodoInput backColor={backColor} />
      <SearchData data={setSearchKey} />
      <ColorBar setBackColor={setBackColor} />
      <h2 style={{ paddingTop: 50 }}>Todo Items</h2>
      <TodoList filterItems={searchList} />
    </div>
  );
}

export default App;
