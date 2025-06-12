export type Todo = {
  id: string;
  text: string;
  // color: (typeof COLORS)[number];
  color: "white" | "red" | "pink" | "yellow";
};

export default function TodoList() {
  return <div>TodoList</div>;
}
