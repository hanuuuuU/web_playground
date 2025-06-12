import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Board from "./components/Board";
import StyledExample from "./components/StyledExample";
import TailwindExample from "./components/TailwindExample";
import "./index.css";
import LazyExample from "./components/LazyExample";

function App() {
  return (
    <>
      <LazyExample />
    </>
  );
}

export default App;
