import { useEffect, useState, useRef } from "react";

export default function Pt8() {
  const [timer, setTimer] = useState(10); // 시간 관리
  const [control, setControl] = useState(false); // 시작 버튼을 눌러야 동작하도록 관리

  //input박스의 값을 받아오기 위해 hook 사용
  const inputRef = useRef(null);

  function start() {
    // 입력 받은 값이 숫자인지 판별
    const inp = Number.isNaN(parseInt(inputRef.current.value))
      ? 10
      : parseInt(inputRef.current.value);
    // const inp = Number.isNaN(document.getElementById("timeInput").value)
    //   ? 10
    //   : parseInt(document.getElementById("timeInput").value);
    setTimer(inp);
    setControl(true);
  }

  useEffect(() => {
    // 초당 1씩 줄어들도록 함.
    // 0초면 타이머 종료 알림 및 설정 초기화
    const dd = setInterval(() => {
      if (control && timer > 0) {
        setTimer(timer - 1);
      } else if (control && timer <= 0) {
        setTimer(10);
        setControl(false);
        alert("타이머 종료");
      }
    }, 1000);
    // ???초기화
    return () => {
      clearInterval(dd);
    };
  }, [timer, control]);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p>{timer}</p>
      <div>
        <input type="text" id="timeInput" ref={inputRef} />
        <button onClick={start}>start</button>
      </div>
    </div>
  );
}
