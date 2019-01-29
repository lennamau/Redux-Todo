import React from "react";
import { connect } from "react-redux";
import { completeTodo } from "../actions";

const style = { textDecoration: "line-through", color: "red" };
const Todos = props => {
  return (
    <div>
      {props.todos.map(todo => (
        <p
          style={todo.completed ? style : null}
          onClick={() => props.completeTodo(todo.id)}
          key={todo.id}
        >
          {todo.text}
        </p>
      ))}
    </div>
  );
};

export default connect(
  null,
  { completeTodo }
)(Todos);
