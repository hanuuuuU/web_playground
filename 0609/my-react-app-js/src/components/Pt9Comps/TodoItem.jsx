export default function TodoItem({ key, text, color }) {
  return (
    <div
      style={{
        display: "flex",
        height: 30,
        backgroundColor: color,
        alignItems: "center",
        marginBottom: 10,
      }}
    >
      <li
        style={{
          width: 250,
          listStyleType: "none",
        }}
      >
        {text}
      </li>
      <button
        onClick={() => {}}
        style={{ height: 30, padding: 6, fontSize: 12 }}
      >
        삭제
      </button>
    </div>
  );
}
