import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';
import { connect } from 'react-redux';
import { addTodo, deleteTodo } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: ''
    };
  }

  handleInputChange = e => {
    e.preventDefault();
    this.setState ({[e.target.name]: e.target.value})
  }

  addTodo = e => {
    e.preventDefault();
    const { todoText } = this.state;
    const newTodo = {
      id: this.props.todos.length + 1,
      completed: false,
      text: todoText
    };
    this.props.addTodo(newTodo);
    this.setState({ todoText: '' });
  };
  deleteTodo = (e, index) => {
    e.preventDefault();
    this.props.deleteTodo(index)
  }

  render() {
    return (
      <div className="App">
      <TodoForm 
        handleInputChange={this.handleInputChange}
        todoText={this.state.todoText}
        addTodo={this.addTodo}
         />
      <Todos todos={this.props.todos}
        deleteTodo={this.deleteTodo} />
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps, { addTodo, deleteTodo }) (App);
