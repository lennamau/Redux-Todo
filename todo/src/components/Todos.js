import React from "react";
import { connect } from "react-redux";
import { completeTodo } from "../actions";

const style = { textDecoration: "line-through", color: "red", cursor: "pointer" };
const Todos = props => {
  return (
    <div>
        
      {props.todos.map((todo, index) => (
        <div className='todo-item'>  
        <p
          style={todo.completed ? style : null}
          onClick={() => props.completeTodo(todo.id)}
          key={todo.id}
        >
          {todo.text}
        </p>
        <button className= "delete" onClick={e => props.deleteTodo(e, index)}>X</button>
        </div>
      ))}
      
    </div>
  );
};

export default connect(
  null,
  { completeTodo }
)(Todos);
