export default function TodoInput({ inputRef, addItem, backColor }) {
  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        style={{ backgroundColor: backColor }}
      />
      <button onClick={addItem}>입력</button>
    </div>
  );
}
