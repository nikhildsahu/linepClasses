import React from "react";

import CounterContainer from "./CounterContainer";

const Counter = () => {
  return (
    <Subscribe to={[CounterContainer]}>
      {counterContainer => (
        <div>
          <div>{counterContainer.state.uid}</div>

          <button onClick={counterContainer.setuid}>Increment</button>
        </div>
      )}
    </Subscribe>
  );
};

export default Counter;
