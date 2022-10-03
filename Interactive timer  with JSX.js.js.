import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <ThisWorks />
    </div>
  );
}

function Init() {
 // initializing the state to start with 0
  const [myNumber, setMyNumber] = useState(0);

  function increment() {
    setMyNumber(myNumber + 1);
  }

  return (
    <div>
      <p>{myNumber}</p>
      <button onClick={increment}>Increment!</button>
    </div>
  );
}
