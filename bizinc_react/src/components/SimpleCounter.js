import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log(`The count is now: ${count}`);
  }, [count]); 

  return (
    <div>
      <div style={{padding: "30px 0px",}}>
        <p style={{width: "80%", margin: "auto"}}>
          <strong style={{fontSize: "30px"}}>Purpose of useEffect:</strong> <br /><br />
          The useEffect hook in React is used for handling side effects in functional components.
          Side effects are things that affect something outside the scope of the function, like
          fetching data, setting up a subscription, or manually changing the DOM.
          It runs after the component renders and can re-run when certain data changes.
          Example use case: Let's say we want to log a message every time the count changes or like above we display the count for the user.
        </p>
      </div>

      <h1 style={{fontFamily:'sans-serif'}}>Counter: {count}</h1>
      <button onClick={decrement} style={{backgroundColor:'white', border: 0, padding: "5px 20px", margin: "5px", borderRadius: "100px", fontSize: "30px" } }>-</button>
      <button onClick={increment} style={{backgroundColor:'white', border: 0, padding: "5px 20px", margin: "5px", borderRadius: "100px", fontSize: "30px" } }>+</button>
    </div>
  );
};

export default Counter;
