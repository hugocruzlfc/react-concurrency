import { memo } from "react";

const logMap = new Map();

const SlowList = memo(function SlowList({ text }) {
  // Log once. The actual slowdown is inside SlowItem.
  console.log("[ARTIFICIALLY SLOW] Rendering 250 <SlowItem />");

  const renderTime = Date.now();
  logMap.set(renderTime, 0);
  setTimeout(() => {
    console.log(`[${text}] Rendered ${logMap.get(renderTime)} out of 250`);
  }, 1000);

  return (
    <ul className="items">
      {Array(250)
        .fill(0)
        .map((_, i) => (
          <SlowItem
            key={i}
            text={text}
            renderTime={renderTime}
          />
        ))}
    </ul>
  );
});

function SlowItem({ text, renderTime }) {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }
  logMap.set(renderTime, logMap.get(renderTime) + 1);
  return <li className="item">Text: {text}</li>;
}

export default SlowList;
