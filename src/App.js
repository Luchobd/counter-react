import "./App.css";
import Counter from "./Components/Counter";
import Button from "./Components/Button";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  const reset = () => {
    setCounter(0);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      <h1 className="title">Click Counter</h1>
      <div className="input">
        <Counter numberView={counter} />
      </div>
      <div className="button_container">
        <Button text="Decrease -" click={decrease} />
        <Button text="Reset 0" click={reset} />
        <Button text="Increase +" click={increase} />
      </div>
    </div>
  );
}

export default App;
