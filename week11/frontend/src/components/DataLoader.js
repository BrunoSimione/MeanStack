import React, { Component } from "react";
import { DataView } from "./DataView";

class DataLoader extends Component {
  constructor(props) {
    super(props);
    ///set up the state
    this.state = { data: [], loaded: false };
    this.url =
      process.env.NODE_ENV === "prod"
        ? "http://my-api:80/api/eletronics/all"
        : "http://192.168.99.100:80/api/eletronics/all";
    console.log("setting the constructor");
  }

  componentDidMount() {
    console.log("component is mounted, doing fetch");
    this.getData();
    //do an api call
    ///got result back
    
  }

  getData() {
    fetch(this.url)
      .then(response => response.json())
      .then(json => this.setState({ data: json, loaded: true }))
      .catch(error => {
        //likely server is not online yet
        console.error("Error:", error);
        console.log("connecting to: " + this.url);
        console.log(this.state);
        this.setState({
          connectionAttempts: this.state.connectionAttempts + 1
        });
        const direct = () => {
          this.getData();
        };
        setTimeout(direct, 5000);
      });
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