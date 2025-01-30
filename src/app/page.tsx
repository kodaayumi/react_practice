"use client";
import { useState } from "react";

function Header({ title }) {
  return <h1>{title ? title : "Default Title"}</h1>;
}

function HomePage() {
  const fruits = ["apple", "banana", "orange"];

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <Header title="React Practice" />
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Count ({count})</button>
    </div>
  );
}

export default HomePage;
