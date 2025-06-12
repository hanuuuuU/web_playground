import React from "react";

export default function TailwindExample() {
  return (
    <div>
      <h1>TailwindExample</h1>

      <button className="bg-blue-500 text-white p-2 rounded-md">버튼</button>

      <div className="container mx-auto">
        <div className="bg-red-300">본문 입력</div>

        <div className="w-500 h-500 bg-blue-300">box</div>
      </div>
    </div>
  );
}
