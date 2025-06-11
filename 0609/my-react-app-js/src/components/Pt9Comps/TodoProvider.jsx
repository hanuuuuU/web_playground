import { createContext, useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid4 } from "uuid";

const initialContext = {
  inputArr: [],
  addTodo: () => {},
  removeTodo: () => {},
  editTodo: () => {},
};

const TodoContext = createContext(initialContext);

export function TodoProvider({ children }) {
  const [inputArr, setInputArr] = useState([]);

  // 저장된 데이터 불러오기 (최초 1회)
  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("json"));
    if (Array.isArray(storageData)) {
      setInputArr(storageData);
    }
  }, []);

  // inputArr 바뀔 때마다 로컬 스토리지 자동 저장
  useEffect(() => {
    localStorage.setItem("json", JSON.stringify(inputArr));
  }, [inputArr]);

  // 추가
  const addTodo = (inputText, backColor) => {
    const newArr = [
      ...inputArr,
      { id: uuid4(), text: inputText, color: backColor },
    ];
    setInputArr(newArr);
  };

  // 삭제
  const removeTodo = (data) => {
    const newList = inputArr.filter((item) => item.id !== data.id);
    setInputArr(newList);
    localStorage.setItem("json", JSON.stringify(newList));
  };

  // 편집
  const editTodo = (nowEdit, inpTxt) => {
    const copiedItems = [...inputArr];
    const findIdx = copiedItems.findIndex((item) => item.id === nowEdit);
    if (findIdx !== -1) {
      copiedItems[findIdx].text = inpTxt;
      setInputArr(copiedItems);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        inputArr,
        addTodo,
        removeTodo,
        editTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  // context사용
  return useContext(TodoContext);
}
