/**
 * [jsx 문법 내에서 javascript 코드 사용법: 중괄호 {} 사용]
 * [CSS 적용방법 기초]
 *  1. inline-style로 적용하기 (style 속성)
 *      -> js 객체로 전달해야함
 *      -> 하이푼으로 연결된 것들은 camelCase로 작성해야 한다
 *      -> ex) background-color => backgroundColor
 */
// export default function HelloWorld() {
//     const name = "Hanu";
//     return (
//       <div style={{ backgroundColor: "red", marginLeft: 30 }}>
//         <p>Hello World {name}</p>
//         <p>This is my First component</p>
//       </div>
//     );
//   }

/**
 *  2. className으로 적용하기 (className 속성)
 *      -> CSS를 정의한다
 *      -> jsx에서 css를 import 한다.
 *      -> className 속성에 명시한다. (js코드이기 때문에, class 키워드 사용불가)
 */

import "./HelloWorld.CSS";

export default function HelloWorld() {
  const name = "Hanu";
  return (
    <div className="box">
      <p style={{ fontSize: 30, fontWeight: "bold" }}>Hello World!</p>
      <p>This is my First React Application</p>
    </div>
  );
}
