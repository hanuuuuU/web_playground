export default function SearchData({ data }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <input type="text" onChange={(e) => data(e.target.value)} />
    </div>
  );
}
