import React, { Component } from 'react';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox
} from '@material-ui/core';

class TodoRow extends Component {
  render() {
    return ( 
      <ListItem>
        <ListItemText id={this.props.labelId} primary={this.props.item.action} />
        <ListItemSecondaryAction>
          <Checkbox
            edge="end"
            onChange={() => this.props.callback(this.props.item)}
            checked={this.props.item.done}
            inputProps={{'aria-labelledby': this.props.labelId}}
          />
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export { TodoRow };