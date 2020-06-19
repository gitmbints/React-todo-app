import React, { Component } from 'react';
import Assignment from '@material-ui/icons/Assignment';
import {
  TextField,
  InputAdornment,
  Button
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
        />
        <Button 
          variant="contained" 
          color="primary"
          onClick={this.createNewTodo}
        >
          Add Task
        </Button>
      </form>
    );
  }
}
 
export { TodoCreator };