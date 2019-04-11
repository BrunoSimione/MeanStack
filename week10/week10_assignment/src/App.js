import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DataLoader from "./components/DataLoader";

class App extends Component {
  render() {
    return (
      <div className="App">
        <DataLoader />
      </div>
    );
  }
}

export default App;
