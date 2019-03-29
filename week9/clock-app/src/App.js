import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ClockController } from "./components/ClockController";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClockController />
      </div>
    );
  }
}

export default App;