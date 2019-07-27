import React, { useState } from "react";
import { Header } from "../components/header/Header";
import { TodosList } from "../components/TodosList";
import { useTodos } from "../hooks/useTodos";
import { AddTodosListForm } from "./forms/AddTodosListForm";

export const TodosListPage = () => {
  const [addFormOpened, setAddFormOpen] = useState(false);
  const [state, actions] = useTodos();

  const rightActions = [
    <button onClick={() => setAddFormOpen(s => !s)} key="add">
      {addFormOpened ? "Close" : "Add"}
    </button>
  ];

  const showFormStyle = {
    display: "block"
  };
  const hideFormStyle = {
    display: "none"
  };

  const handleAddTodos = ({ title, initial }) => {
    const { addTodos } = actions;
    setAddFormOpen(false);
    addTodos(title, initial);
  };

  return (
    <div>
      <Header title="Todos" rightActions={rightActions} />
      <div style={addFormOpened ? showFormStyle : hideFormStyle}>
        <AddTodosListForm
          initialValues={{ title: "", initial: "" }}
          onAdd={handleAddTodos}
        />
      </div>
      <TodosList items={state.todoLists} />
    </div>
  );
};
