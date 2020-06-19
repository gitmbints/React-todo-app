import React, { Component } from 'react';
import {
  Assignment,
  PostAdd
} from '@material-ui/icons';
import {
  TextField,
  InputAdornment,
  IconButton,
} from '@material-ui/core';

class TodoCreator extends Component {
  constructor(props) {
    super(props);
    this.state = { newItemText: "" }
  }

  updateNewTextValue = (event) => {
    this.setState({ newItemText: event.target.value });
  }

  createNewTodo = () => {
    this.props.callback(this.state.newItemText);
    this.setState({newItemText: ""});
  }

  render() { 
    return ( 
      <form noValidate autoComplete="off" gutterBottom>
        <TextField 
          id="input-with-icon-textfield"
          label="Task"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Assignment />
              </InputAdornment>
            ),
          }}
          value={this.state.newItemText}
          onChange={this.updateNewTextValue}
          margin="normal"
        />
        <IconButton 
          aria-label="add"
          onClick={this.createNewTodo}
        >
          <PostAdd />
        </IconButton>
      </form>
    );
  }
}
 
export { TodoCreator };