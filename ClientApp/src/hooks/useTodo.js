import React from "react";
import { TodosContext } from "../context/TodosContext";

export const useTodo = id => {
  const [todosContext, dispatch] = React.useContext(TodosContext);

  const addTodo = todo => {
    dispatch({
      type: "@@todo/ADD_TODO",
      payload: {
        todosId: id,
        todo
      }
    });
  };

  const editTodo = (todoId, newValue) => {
    dispatch({
      type: "@@todo/EDIT_TODO",
      payload: {
        todosId: id,
        todoId,
        text: newValue
      }
    });
  };

  return [todosContext.todoLists.find(e => e.id === id), { addTodo, editTodo }];
};
