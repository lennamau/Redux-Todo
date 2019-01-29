import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from '../actions';

const initialState = {
  todos: []};

export const todosReducer = (state = initialState, action) => {
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
      return { ...state, todos: todos }

    case DELETE_TODO:
        return {
            ...state,
            todos: state.todos.filter( (todo, index) => action.payload !== index )
        }
    default:
      return state;
  }
};