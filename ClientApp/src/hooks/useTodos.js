import React from "react";
import { TodosContext } from "../context/TodosContext";

export const useTodos = () => {
  const [todosContext, dispatch] = React.useContext(TodosContext);

  const addTodos = (title, initial) => {
    dispatch({
      type: "@@todos/ADD_TODOS",
      payload: {
        title,
        initial
      }
    });
  };

  return [todosContext, { addTodos }];
};
