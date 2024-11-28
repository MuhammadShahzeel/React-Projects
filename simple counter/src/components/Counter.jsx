import { useEffect, useState } from "react";
import "../index.css";

function Counter() {
  useEffect(() => {
    document.title = `count: ${count}`
  
    
  })
  
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <>
      <div className="container">
        <h1 className="number">{count}</h1>
      </div>

      <section className="btns-container">
        <button onClick={decrement} >
          -
        </button>
        <button onClick={reset}  id="reset">
          Reset
        </button>
        <button onClick={increment} >
          +
        </button>
      </section>
    </>
  );
}

export default Counter;