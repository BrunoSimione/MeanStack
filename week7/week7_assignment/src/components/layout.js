import React from 'react';
import {MemoryRouter, Switch} from 'react-router';
import {Link, Route} from 'react-router-dom';
import {Home} from './home'
import {RegisterContainer} from './containers/registerContainer';
import {Login} from './login';
import {APIContainer} from './containers/apiContainer';
import {Button, Paper} from '@material-ui/core'

export const Layout = (props)=>{
    return(
        <div>
            
            <MemoryRouter>
                <div>
                    <div>
                        <h1>Options</h1>
                        <Link to="/login"><Button color='primary'>Login</Button></Link>
                        <Link to="/register"><Button color='secondary'>Register</Button></Link>
                    </div>
                    <APIContainer />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={RegisterContainer} />
                    </Switch>
                </div>
            </MemoryRouter>
        </div>
        ///props.logIn()
    )
}