# Week 12 Assignment
## Router

In this assignment we will create an app that uses the _react_router_dom_ package.

After creating the app, basically all link/router control is on the [App.js](https://oddlylabs.com/brunosimione/ITE5430/src/master/week12/router-app/src/App.js) file.

```
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
```

This transforms the app from a single view application to a multi view application where the pages can be accessed using the specific url path.

We can also create a file [styledComponent.js](https://oddlylabs.com/brunosimione/ITE5430/src/master/week12/router-app/src/components/UI/styledComponents.js) to control the styles of the whole app.