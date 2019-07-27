import React, { useState } from "react";
import { TodoListItem } from "./TodoListItem";
import { EditTodoForm } from "../pages/forms/EditTodoForm";

export const TodoList = ({ items, onEdit }) => {
  const initialState = { id: 0, text: "", completed: false };
  const [current, setCurrent] = useState(initialState);

  const handleCancel = () => {
    setCurrent(initialState);
  };

  const handleEdit = ({ id, text }) => {
    onEdit(id, text);
    setCurrent(initialState);
  };

  const renderTodoItems = todoItems => {
    return todoItems.map(todo => {
      return todo.id === current.id ? (
        <EditTodoForm
          initialValues={current}
          onCancel={handleCancel}
          onEdit={handleEdit}
        />
      ) : (
        <TodoListItem
          key={todo.id}
          text={todo.text}
          completed={todo.completed}
          onEdit={() => {
            setCurrent(todo);
          }}
        />
      );
    });
  };

  return <div style={{ flexGrow: 1 }}>{renderTodoItems(items)}</div>;
};
