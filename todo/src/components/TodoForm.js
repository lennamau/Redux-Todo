import React from "react";

const TodoForm = props => {
  return (
    <div>
        <h2>Redux To Do App</h2>
      <div className="form">
      <form>
        <input
          name="todoText"
          value={props.todoText}
          type="text"
          onChange={props.handleInputChange}
          placeholder="Add task..."
        />
        <button onClick={props.addTodo}>
          Add 
        </button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
