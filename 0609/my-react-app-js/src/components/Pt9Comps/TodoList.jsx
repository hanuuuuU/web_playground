import TodoItem from "./TodoItem";

export default function TodoList({ items }) {
  return (
    <ul style={{ paddingLeft: 0 }}>
      {items.map((data, idx) => (
        <TodoItem key={idx} text={data.text} color={data.color} />
      ))}
    </ul>
  );
}
