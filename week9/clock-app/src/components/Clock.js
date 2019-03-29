import React from "react";
const Clock = props => {
  if (props.date) {
    return (
      <div>
        <h1> The time is {` ${props.date}`}</h1>
        <button onClick={props.action}>Stop Click</button>
        <button onClick={props.action2}>Reset</button>
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
};
export default Clock;