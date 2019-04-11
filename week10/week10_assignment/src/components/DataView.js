import React from "react";

export const DataView = props => {
  const employees = props.info;
  const listItems = employees.map(employee => (
    <li key={employee.id}>{employee.employee_name}</li>
  ));
  return (
    <div>
      <h1>Employees</h1>
      <ul>{listItems}</ul>
    </div>
  );
};