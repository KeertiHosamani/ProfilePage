import React, { useState } from "react";

function App() {
  let [fruit, setFruit] = useState("Apple");
  let [status, setStatus] = useState(false);
  let [count, setCount] = useState(0);

  function handleStatus() {
    setStatus(!status);

    if (!status) {
      setFruit("Mango");
    } else {
      setFruit("Apple");
    }
  }

  function addCount() {
    setCount(count + 1);
  }

  function subtractCount() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Count is already 0");
    }
  }

  return (
    <div>
      <h2>Welcome to States</h2>

      <h2>{fruit}</h2>
      <button onClick={handleStatus}>Change Fruit</button>

      <br /><br />

      <h2>Count: {count}</h2>
      <button onClick={addCount}>Increase Count</button>

      {
        count === 0 ? <h2>It's Sunday</h2> :
        count === 1 ? <h2>It's Monday</h2> :
        count === 2 ? <h2>It's Tuesday</h2> :
        count === 3 ? <h2>It's Wednesday</h2> :
        count === 4 ? <h2>It's Thursday</h2> :
        count === 5 ? <h2>It's Friday</h2> :
        count === 6 ? <h2>It's Saturday</h2> :
        <h2>Invalid Option</h2>
      }

      <button onClick={subtractCount}>Decrease Count</button>
    </div>
  );
}

export default App;