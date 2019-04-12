import React, { Component } from "react";
import "./App.css";
import { MenuBar } from "./components/UI/styledComponents";
import { MemoryRouter, Switch } from "react-router";
import { Link, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Image from "./components/Image";
import { Page, TopBar, TopBarTitle } from "./components/UI/styledComponents";

class App extends Component {

  render() {
    return (
      <Page>
        <MemoryRouter
          initialEntries={['/home', '/about', '/image']}>
          <div>
            <TopBar>
              <TopBarTitle>
                <Link to="/home">Home</Link>
              </TopBarTitle>
              <TopBarTitle>
                <Link to="/about">About</Link>
              </TopBarTitle>
              <TopBarTitle>
                <Link to="/image">Image</Link>
              </TopBarTitle>
            </TopBar>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/image" component={Image} />
            </Switch>
          </div>
        </MemoryRouter>
      </Page>
    );
  }
}

export default App;