import { useRef } from "react";
import { TodoProvider, useTodo } from "./TodoProvider";

export default function TodoInput({ backColor }) {
  const inputRef = useRef(null);
  const { addTodo } = useTodo();
  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        style={{ backgroundColor: backColor }}
      />
      <button
        onClick={() => {
          console.log(inputRef);
          return addTodo(inputRef.current.value, backColor);
        }}
      >
        입력
      </button>
    </div>
  );
}
