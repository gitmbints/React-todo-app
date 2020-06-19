import React, { Component } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,

} from '@material-ui/core';

class TodoBanner extends Component {
  render() { 
    return ( 
      <AppBar position="static" color="default">
        <Toolbar variant="dense">
          <Typography variant="h6" >
            {this.props.name}'s To Do List
            ({this.props.tasks.filter(t => !t.done).length} items to do)
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
 
export { TodoBanner };