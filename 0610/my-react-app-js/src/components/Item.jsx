import React from "react";

export default function Item({ data }) {
  return (
    <div>
      <p>
        {data.userId}-{data.id}
      </p>
      <div>
        <p>{data.title}</p>
        <p>{data.body}</p>
      </div>
    </div>
  );
}
