import React from "react";

export const DataView = props => {
  const eletronics = props.info;
  const listItems = eletronics.map(eletronic => (
    <li key={eletronic.id}>{eletronic.brand + " | " + eletronic.model}</li>
  ));
  return (
    <div>
      <h1>Eletronics</h1>
      <ul>{listItems}</ul>
    </div>
  );
};