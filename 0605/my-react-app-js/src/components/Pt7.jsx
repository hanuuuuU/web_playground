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
