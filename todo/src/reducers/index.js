import { ADD_TODO, COMPLETE_TODO } from '../actions';

const initialState = {
  todos: []};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
          ...state,
        todos: [...state.todos, action.payload]
      };
    case COMPLETE_TODO:
      const id = action.payload;
      const todos = state.todos.map(todo =>
         (todo.id === id) ?
          {...todo, completed: !todo.completed }
          : todo )   
      return Object.assign({}, state, { todos: todos });
    default:
      return state;
  }
};