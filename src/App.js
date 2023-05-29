import { useState, useCallback } from "react";
import SlowList from "./SlowList.js";

export default function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    // Run this update non-concurrently
    setCount((count) => count + 1);
  }, []);

  return (
    <>
      <h2>Non-Transition</h2>
      <button onClick={increment}>Count {count}</button>
      <SlowList text={count.toString()} />
    </>
  );
}
