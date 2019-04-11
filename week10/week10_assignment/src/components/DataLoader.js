import React, { Component } from "react";
import { DataView } from "./DataView";

class DataLoader extends Component {
  constructor(props) {
    super(props);
    ///set up the state
    this.state = { data: [], loaded: false };
    console.log("setting the constructor");
  }
  componentDidMount() {
    console.log("component is mounted, doing fetch");
    //do an api call
    ///got result back
    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then(response => response.json())
      .then(json => this.setState({ data: json, loaded: true }));
  }
  render() {
    if (this.state.loaded) {
      return (
        <div>
          <DataView info={this.state.data} /> 
        </div>
      );
    } else {
      return (
        <div>
          <h3>Loading...</h3>
        </div>
      );
    }
  }
}

export default DataLoader;