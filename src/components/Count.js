import { useState } from "react";
import React from "react";

const COUNT = () => {
  const [count, setcount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Increment Game
      </button>
    </div>
  );
};

export default COUNT;
