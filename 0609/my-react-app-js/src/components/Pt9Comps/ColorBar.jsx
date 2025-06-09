export default function ColorBar({ setBackColor }) {
  const colors = ["white", "red", "yellow", "pink"];
  return (
    <div>
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => setBackColor(color)}
          style={{ backgroundColor: color, marginRight: 5 }}
        >
          {color[0]}
        </button>
      ))}
    </div>
  );
}
