import { useState } from "react";
import "./App.css";

function App() {
  const [counter , setcounter] = useState(0);
  function handlechange(value){
      setcounter(counter + value)
  }
  return (
    <div className="App">
      <h2 data-testid="counter-value">Counter: {counter}</h2>
      <button data-testid="counter-decrement-button" onClick={()=>{handlechange(-1)}} disabled={counter===0? true : false}>+</button>
      <button data-testid="counter-increment-button" onClick={()=>{handlechange(+1)}}>-</button>
    </div>
  );
}

export default App;
