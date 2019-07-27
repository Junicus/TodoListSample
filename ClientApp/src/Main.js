import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { TodosProvider } from "./context/TodosContext";
import { todosReducer } from "./todosReducer";

const initialState = {
  lastTodosId: 2,
  lastTodoId: 5,
  todoLists: [
    {
      id: 1,
      title: "Sample 1",
      initial: "S",
      todos: [
        { id: 1, text: "Item 1-1", completed: false },
        { id: 2, text: "Item 1-2", completed: true },
        { id: 3, text: "Item 1-3", completed: false }
      ]
    },
    {
      id: 2,
      title: "The Sample 2",
      initial: "T",
      todos: [
        { id: 4, text: "Item 2-1", completed: true },
        { id: 5, text: "Item 2-2", completed: false }
      ]
    }
  ]
};

export const Main = () => {
  return (
    <Router>
      <TodosProvider initialState={initialState} reducer={todosReducer}>
        <App />
      </TodosProvider>
    </Router>
  );
};
