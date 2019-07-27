export const todosReducer = (state, action) => {
  console.log({ stateBefore: state, action });
  switch (action.type) {
    case "@@todos/ADD_TODOS": {
      let { lastTodosId } = state;
      return {
        ...state,
        lastTodosId: ++lastTodosId,
        todoLists: [
          ...state.todoLists,
          {
            id: lastTodosId,
            title: action.payload.title,
            initial: action.payload.initial,
            todos: []
          }
        ]
      };
    }
    case "@@todo/ADD_TODO": {
      let { lastTodoId } = state;
      return {
        ...state,
        lastTodoId: ++lastTodoId,
        todoLists: state.todoLists.map(todoList => {
          if (todoList.id === action.payload.todosId) {
            return {
              ...todoList,
              todos: [
                ...todoList.todos,
                { id: lastTodoId, text: action.payload.todo, completed: false }
              ]
            };
          } else {
            return todoList;
          }
        })
      };
    }
    case "@@todo/EDIT_TODO": {
      return {
        ...state,
        todoLists: state.todoLists.map(todoList => {
          if (todoList.id === action.payload.todosId) {
            return {
              ...todoList,
              todos: todoList.todos.map(todo => {
                if (todo.id === action.payload.todoId) {
                  return {
                    ...todo,
                    text: action.payload.text
                  };
                }
                return todo;
              })
            };
          }
          return todoList;
        })
      };
    }
    default:
      return state;
  }
};
