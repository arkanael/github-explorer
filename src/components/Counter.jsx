import { useState } from "react";

export function Counter() {
  let [counter, setcounter] = useState(0);

  function increment() {
    setcounter(counter + 1);
    console.log("incrementando " + setcounter);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}
