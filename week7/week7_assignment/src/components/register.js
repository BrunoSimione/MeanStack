import React from 'react';
import {Component} from 'react';
import {Button} from '@material-ui/core'


export class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            hintMessage:"You need to register."
        }
        console.log(props);
        console.log("Register is alive!")
    }
    //lifecycle.
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        console.log("I am getting new props!")
        if(this.props.registrationRequested=="not-requested" && nextProps.registrationRequested=="requested")
        {
            //do stuff, like show a spinny graphic
            this.setState({hintMessage:"Registering, please wait"});
        }
        if(nextProps.registrationRequested=="completed"){
            this.setState({hintMessage:"You are registered!!"});
        }
        if(nextProps.registrationRequested=="fail"){
            this.setState({hintMessage:"Registration Failed!!"});
        }
    }
    register(){
        console.log("You want to register")
        this.props.register("bruno@bruno.com","password");
    }
    render(){
        return(
            <div>
                <h2>I am smart now</h2>
                <Button variant="outlined" color="primary" onClick={this.register.bind(this)}>
                    Register
                </Button>
                <p>{this.state.hintMessage}</p>
            </div>
        )
    }
}