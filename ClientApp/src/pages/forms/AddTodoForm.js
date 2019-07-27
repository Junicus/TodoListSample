import React, { useState } from "react";

export const AddTodoForm = ({ initialValues, onAdd }) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    onAdd(values);
  };

  return (
    <form>
      <div>
        <label>Todo</label>
        <input
          type="text"
          name="todo"
          value={values.todo}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleSubmit}>Add Todo</button>
    </form>
  );
};
