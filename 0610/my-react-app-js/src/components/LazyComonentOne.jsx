export default function LazyComonentOne() {
  // 내부에 많은 계산이나 다른 컴포넌트, 이미지 등을 포함할 수 있습니다.
  console.log("LazyComonentOne 로드 및 렌더링");
  return (
    <div
      style={{
        border: "2px solid lightcoral",
        backgroundColor: "#fff5f5",
      }}
    >
      <h2> LazyComonentOne </h2>
      <ul>
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={index}>무거운 아이템 {index + 1}</li>
        ))}
      </ul>
    </div>
  );
}
