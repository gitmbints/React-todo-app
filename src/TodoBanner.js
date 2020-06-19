import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginBottom: 30, 
  },
});

function TodoBanner (props) {
  const classes = useStyles();
  return ( 
    <AppBar className={classes.root} position="static" color="default">
      <Toolbar variant="dense">
        <Typography variant="h6" >
          {props.name}'s To Do List
          ({props.tasks.filter(t => !t.done).length} items to do)
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
 
export { TodoBanner };