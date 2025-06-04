import React, { useEffect, useState } from "react";

export default function BlinkComponent({ text }) {
  const [showText, setShowText] = useState(true);

  // 컴포넌트가 만들어질 때 딱 한 번 호출됨
  useEffect(() => {
    const timeoutId = setInterval(() => {
      setShowText((showText) => !showText);
    }, 1000);
    return () => {
      clearInterval(timeoutId);
    };
  }, []);

  return <div>{showText ? text : null}</div>;
}
