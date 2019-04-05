import React from "react";
import {Button} from "@material-ui/core";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

const Clock = props => {
  console.log(props);
  const { classes } = props;
  if (props.date) {
    return (
      <div>
        <h1> The time is {` ${props.date}`}</h1>
        <Button  className={classes.button} variant="contained" color="secondary" onClick={props.action}>Start / Stop Click</Button>
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

export default withStyles(styles)(Clock);