import { useEffect, useState } from "react";

export default function Pt4() {
  const [toggle, setToggle] = useState(true);
  const [btn, setBtn] = useState("ON");
  useEffect(() => {
    if (toggle) {
      setBtn("ON");
      console.log("Toggle is ON");
    } else {
      setBtn("OFF");
      console.log("Toggle is OFF");
    }
  }, [toggle]);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>{btn}</button>
    </div>
  );
}
