import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemePage() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      style={
        theme === "light"
          ? { backgroundColor: "#e9e9e9" }
          : { backgroundColor: "black" }
      }
    >
      <div style={{ minHeight: 600 }}>MyPage</div>
    </div>
  );
}
