export default function TodoItem({ text, color }) {
  return (
    <li
      style={{
        backgroundColor: color,
        width: 250,
        listStyleType: "none",
        marginBottom: 10,
      }}
    >
      {text}
    </li>
  );
}
