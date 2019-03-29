import React from "react";
import Clock from "./Clock";
export class ClockController extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), active: true };
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
  }
  resetClock(){
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  tick() {
    this.setState({
      date: new Date().toLocaleTimeString()
    });
  }
  render() {
    return (
      <div>
        <Clock date={this.state.date} action={this.stopClock.bind(this)} action2={this.resetClock.bind(this)} />
      </div>
    );
  }
}