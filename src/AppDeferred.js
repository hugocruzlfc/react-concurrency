import { useState, useTransition, useCallback } from "react";
import SlowList from "./SlowList.js";

export default function App() {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    startTransition(() => {
      // Run this update concurrently
      setCount((count) => count + 1);
    });
  }, [startTransition]);

  return (
    <>
      <h2>Transition</h2>
      <button onClick={increment}>Count {count}</button>
      <p>{isPending ? "Pending" : "Not Pending"}</p>
      <SlowList text={count.toString()} />
    </>
  );
}
