import { useEffect, useState } from "react";

export default function Pt7() {
  const [sec, setSec] = useState(0);
  const [control, setControl] = useState(false);

  function startTimer() {
    setControl(true);
  }
  function stopTimer() {
    setControl(false);
  }
  function resetTimer() {
    setSec(0);
  }
  // setState함수 두가지 사용법.
  // setState(값) ==> state를 해당 값으로 하겠다. <1번>
  // setState((prevState)=>{ return newState }) <2번>
  //   ==> 이전 state를 인자로 받아서 새로운 state를 return
  //
  //1번
  useEffect(() => {
    const dd = setInterval(() => {
      if (control) {
        setSec(sec + 1);
      }
    }, 1000);
    return () => {
      clearInterval(dd);
    };
  }, [sec, control]);
  // 2번
  // useEffect(() => {
  //   if (control) {
  //     const intervalId = setInterval(() => {
  //       setSec((prev) => prev + 1);
  //     }, 1000);
  //     return () => {
  //       clearInterval(intervalId);
  //     };
  //   }
  // }, [control]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p>{sec}</p>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
