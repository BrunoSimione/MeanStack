import React from "react";

export const DataView = props => {
  const instructors = props.info;
  const listItems = instructors.map(instructor => (
    <li key={instructor._id}>{instructor.firstName}</li>
  ));
  return (
    <div>
      <h1>Instructors</h1>
      <ul>{listItems}</ul>
    </div>
  );
};