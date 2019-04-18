# Week9 Assignment
## Components, Props, and States

We start creating the clock app `npm init react-app clock-app`

Steps:
* Create the [Clock.js](https://oddlylabs.com/brunosimione/ITE5430/src/master/week9/clock-app/src/components/Clock.js) that will be mainly the 'front' of our app and show the clock running.
* Create the [ClockController.js](https://oddlylabs.com/brunosimione/ITE5430/src/master/week9/clock-app/src/components/ClockController.js) that will contain all the functions to control the Clock.
* We can edit the ClockController above to has a toggle button instead of two different buttons to pause/reset the clock. We can do this checking the state:
```
startStopClock() {
    if(this.state.status === true){
      this.stopClock();
    }else{
      this.resetClock();
    } 
  }
```

Obs: We need to aways update the state using the setState function. 
