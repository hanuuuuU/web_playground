import LazyComponentOne from "./LazyComonentOne";
import LazyComponentTwo from "./LazyComonentTwo";

import * as React from "react";
import { Suspense, useState } from "react";

// --- Lazy Loading 컴포넌트 ---
// 이 컴포넌트의 코드는 처음부터 메인 번들에 포함되지 않음,
// 실제로 화면에 렌더링될 필요가 있을 때 별도의 파일로 불러옵니다.
// import() 함수는 Promise를 반환합니다(해당 모듈의 export default 모듈을 반환)

// const LazyComponentOne = React.lazy(() => import("./LazyComonentOne"));
// const LazyComponentTwo = React.lazy(() => import("./LazyComonentTwo"));
export default function LazyExample() {
  const [showLazy1, setShowLazy1] = useState(false);
  const [showLazy2, setShowLazy2] = useState(false);
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div>
        <p>
          아래 버튼을 클릭하면 해당 컴포넌트의 코드를 지연 로딩하여 화면에
          보여줍니다.
        </p>
        <button onClick={() => setShowLazy1((prev) => !prev)}>
          {showLazy1 ? "Lazy1 숨기기" : "Lazy1 보기"}
        </button>
        <button onClick={() => setShowLazy2((prev) => !prev)}>
          {showLazy2 ? "Lazy2 숨기기" : "Lazy2 보기"}
        </button>
      </div>

      <div>
        {/* Suspense 컴포넌트는 지연 로딩되는 컴포넌트가 로드될 때까지 fallback UI를 보여줌. */}
        <Suspense fallback={<div>Loading중입니다...</div>}>
          {showLazy1 && <LazyComponentOne />}
          {showLazy2 && <LazyComponentTwo />}
          {!showLazy1 && !showLazy2 && (
            <p style={{ color: "gray" }}>표시할 기능이 선택되지 않았습니다.</p>
          )}
        </Suspense>
      </div>
    </div>
  );
}
