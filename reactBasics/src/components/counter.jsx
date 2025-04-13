import React, {useState} from 'react'

const Counter = () => {
    // let Counter = 20;
  const [counter, setCounter] = useState(10);

  const addValue = () => {
    console.log(counter);
    // counter = counter + 1;
    setCounter(counter+1);
  };
  const decreaseValue = () => {
    setCounter(counter - 1);
  };
  const winner = () => {
    if (counter === 0 || counter == 20) {
      console.log("winner");
      return "winner";
    }
    // return null;
  };
  return (
<>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue} disabled = {counter == 20}>Increase value + </button>
      <button onClick={decreaseValue} disabled = {counter == 0}>Decrease value - </button>
      <h1>{winner()}</h1>
    </>  )
}

export default Counter