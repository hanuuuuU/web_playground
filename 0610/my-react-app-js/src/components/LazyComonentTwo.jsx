export default function LazyComponentTwo() {
  // 내부에 많은 계산이나 다른 컴포넌트, 이미지 등을 포함할 수 있습니다.
  console.log("LazyComonentTwo 로드 및 렌더링");
  return (
    <div
      style={{
        border: "2px solid lightseagreen",
        backgroundColor: "#f0fff0",
      }}
    >
      <h2>LazyComonentTwo</h2>
      <button onClick={() => alert("기능 활성화!")}>클릭!</button>
    </div>
  );
}
