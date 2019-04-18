# Assignment 10
## DataLoader - Calling our API

First of all, we need to make sure that our monolithic-api created is running.

Steps:
* First, we create the app `npm init react_app week10_assignment`
* Create the [DataLoader](https://oddlylabs.com/brunosimione/ITE5430/src/master/week10/week10_assignment/src/components/DataLoader.js)

    The DataLoader will call our API created in the previous week, fetch the data, and update the state:
    ```
    componentDidMount() {
    console.log("component is mounted, doing fetch");
    //do an api call
    ///got result back
    fetch("http://192.168.99.100/api/eletronics/all")
      .then(response => response.json())
      .then(json => this.setState({ data: json, loaded: true }));
    }
    ```
* Create [DataView](https://oddlylabs.com/brunosimione/ITE5430/src/master/week10/week10_assignment/src/components/DataView.js) that will receive the data and then show it. 

    Receiving the data:
    ```
    <DataView info={this.state.data} />
    ```

    Going through the state using the .map function:
    ```
    const listItems = eletronics.map(eletronic => (
    <li key={eletronic.id}>{eletronic.brand + " | " + eletronic.model}</li>
    ));
    ```

* Run the app `npm start` and voilà!