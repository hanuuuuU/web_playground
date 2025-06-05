import { useEffect, useState } from "react";

export default function Pt6() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users");
      const jsonData = await resp.json();
      setData(jsonData);
    })();
  }, []);

  return (
    <div>
      <ul>
        {data.map((d, idx) => {
          return (
            <li key={idx}>
              {d.username}-{d.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
