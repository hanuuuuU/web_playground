import BlinkComponent from "./components/BlinkComponent";
import CaptionImage from "./components/CaptionImage";
import CountComponent from "./components/CountComponent";
import HelloWorld from "./components/HelloWorld";
import MyButton from "./components/MyButton";
import { useState } from "react";

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>보이기</button>
      {visible ? <CountComponent /> : null}
    </div>
  );
}
