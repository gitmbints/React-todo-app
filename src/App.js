import React, { Component } from 'react';
import { TodoBanner } from './TodoBanner';
import { TodoCreator } from './TodoCreator';
import { TodoRow } from './TodoRow';
import { VisibilityControl } from './VisibilityControl';
import {  
  Container, 
  List,
  Paper
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
      showCompleted: true
    }
  }

  // I don't understand this snippet
  toggleTodo = todo => this.setState({
    todoItems: this.state.todoItems.map(item => item.action === todo.action ? {...item, done: !item.done} : item)
  });

  todoListRows = (doneValue) => this.state.todoItems.filter(item => item.done === doneValue).map((item, index) => {
    return (
      <TodoRow 
        key={item.action} 
        item={item} 
        callback={this.toggleTodo} 
        labelId={`checkbox-list-secondary-label-${index}`} 
      />
    );
  });

  updateNewTextValue = (event) => {
    this.setState({
      newItemText: event.target.value
    });
  }

  createNewTodo = (task) => {
    if (!this.state.todoItems.find(item => item.action === task)) {
      this.setState({
        todoItems: [...this.state.todoItems, {action: task, done: false}],
      });
    }
  }

  render = () => 
    <div align="center">
      <Container maxWidth="sm">
        <TodoBanner 
          name={this.state.userName}
          tasks={this.state.todoItems}
        />
        <TodoCreator callback={this.createNewTodo} />
        <Paper square elevation={2}>
          <List dense>
            {this.todoListRows(false)}
          </List>
        </Paper>
        <VisibilityControl 
          description="Completed Tasks"
          isChecked={this.state.showCompleted}
          callback={ (checked) => this.setState({showCompleted: checked}) }
        />
        { this.state.showCompleted &&
          <Paper square elevation={2}>
            <List dense>
              {this.todoListRows(true)}
            </List>
          </Paper>
        }
      </Container>
    </div>
}

export default App;
