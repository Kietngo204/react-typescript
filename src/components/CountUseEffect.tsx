import React, { useState, useEffect } from "react";

function CountUseEffect() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log(`Count changed: ${count}`);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default CountUseEffect;
