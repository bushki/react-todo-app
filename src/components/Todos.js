import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {


  render() {
    return  this.props.todos.map( (todo) => (
        <TodoItem key={todo.id} 
        todo={todo} 
        deleteTodo={this.props.deleteTodo}
        markCompleteOnTodos={this.props.markCompleteOnApp}></TodoItem>
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markCompleteOnApp: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default Todos;
