import React from "react";

const TodoForm = props => {
  return (
    <div>
      <div className="form">
        <input
          name="todoText"
          value={props.todoText}
          type="text"
          onChange={props.handleInputChange}
          placeholder="Enter here"
        />
        <button color="primary" onClick={props.addTodo}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
