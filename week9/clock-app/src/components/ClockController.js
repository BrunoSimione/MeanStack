import React from "react";
import Clock from "./Clock";
import logo from "../clock.png";

export class ClockController extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), active: true, status: true };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    this.setState({ active: false });
    this.stopClock();
  }
  stopClock() {
    clearInterval(this.timerID);
    this.setState({status: false})
  }

  startStopClock() {
    if(this.state.status === true){
      this.stopClock();
    }else{
      this.resetClock();
    }
    
  }

  resetClock(){
    this.timerID = setInterval(() => this.tick(), 1000);
    this.setState({status: true})
  }

  tick() {
    this.setState({
      date: new Date().toLocaleTimeString()
    });
  }
  render() {
    return (
      <div>
        <img src={logo} width="100" height="100"/>
        <Clock date={this.state.date} action={this.startStopClock.bind(this)} />
        
      </div>
    );
  }
}