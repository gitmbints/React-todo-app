import React, { Component } from 'react';
import Assignment from '@material-ui/icons/Assignment';
import { 
  Typography, 
  Button, 
  Container, 
  TextField, 
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox
} from '@material-ui/core';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "John",
      todoItems: [
        {action: "Buy Flowers", done: false},
        {action: "Get Shoes", done: false},
        {action: "Coding with React", done: true},
        {action: "Call Doe", done: false}],
      newItemText: ""
    }
  }

  toggleTodo = todo => this.setState({
    todoItems: this.state.todoItems.map(item => item.action === todo.action ? {...item, done: !item.done} : item)
  });

  todoListRows = () => this.state.todoItems.map((item, index) => {
    const labelId = `checkbox-list-secondary-label-${index}`;
    return (
      <ListItem key={ item.action } button>
        <ListItemText id={labelId} primary={ item.action } />
        <ListItemSecondaryAction>
          <Checkbox
            edge="end"
            onChange={ () => this.toggleTodo(item) }
            checked={ item.done }
            inputProps={{ 'aria-labelledby': labelId }}
          />
        </ListItemSecondaryAction>
      </ListItem>
    );
  });

  updateNewTextValue = (event) => {
    this.setState({
      newItemText: event.target.value
    });
  }

  createNewTodo = () => {
    if (!this.state.todoItems.find(item => item.action === this.state.newItemText)) {
      this.setState({
        todoItems: [...this.state.todoItems, {action: this.state.newItemText, done: false}],
        newItemText: ""
      });
      console.log(this.state.todoItems);
    }
  }

  render = () => 
    <div align="center">
      <Typography variant='h4' align='center' gutterBottom>
        {this.state.userName}'s To Do List
        ({ this.state.todoItems.filter(t => !t.done).length } items to do)
      </Typography>
      <Container maxWidth="md">
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
            Add
          </Button>
        </form>
        <List dense>
          { this.todoListRows() }
        </List>
      </Container>
    </div>
}

export default App;
