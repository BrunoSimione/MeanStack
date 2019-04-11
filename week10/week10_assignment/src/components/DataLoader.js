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
    fetch("http://192.168.99.100/api/instructors/all")
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