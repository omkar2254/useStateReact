import { useEffect } from 'react';
import './App.css';
import React, { useState } from "react";

function App() {
  //UseState #1
  const [counter, setCounter] = useState(0);
  const handleClick = () => setCounter(counter + 1);

  //#2 multiple states
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('blue');


  // function decrementCount(){
  //   setCount(count=>count-1);
  //   
  // }
  
  const decrementCount = () => setCount(count-1)
  {
    useEffect(() => {
      if (count < 0) {
        setTheme('red');
      }else{
        setTheme('blue');
      }
    });
  }

  const incrementCount = () => setCount(count + 1);

  //useEffect


  return (
    //practice hooks
    <>
      <button style={{ marginTop: '50px' }} onClick={handleClick}>Click me</button>
      <span style={{ marginLeft: '10px' }}>counter</span>
      <div style={{ marginTop: '0px', marginLeft: '100px' }}>{counter}</div>

      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
