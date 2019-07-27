import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { TodoList } from "../components/TodoList";
import { useTodo } from "../hooks/useTodo";
import { AddTodoForm } from "./forms/AddTodoForm";

export const TodoListPage = props => {
  const [addFormOpened, setAddFormOpen] = useState(false);
  const { params } = props.match;
  const [todo, actions] = useTodo(Number(params.id));
  const leftActions = <Link to="/">Back</Link>;

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

  const handleAddTodo = ({ todo }) => {
    const { addTodo } = actions;
    setAddFormOpen(false);
    addTodo(todo);
  };

  const { editTodo } = actions;
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header
        leftActions={leftActions}
        title={todo.title}
        rightActions={rightActions}
      />
      <div style={addFormOpened ? showFormStyle : hideFormStyle}>
        <AddTodoForm initialValues={{ todo: "" }} onAdd={handleAddTodo} />
      </div>
      <TodoList items={todo.todos} onEdit={editTodo} />
      <Footer totalCount={2} completedCount={1} />
    </div>
  );
};
