import React, { useState } from "react";

export const EditTodoForm = ({ initialValues, onEdit, onCancel }) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = event => {
    onEdit(values);
  };

  const handleCancel = event => {
    onCancel();
  };

  return (
    <div>
      <input
        type="text"
        name="text"
        value={values.text}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Yes</button>
      <button onClick={handleCancel}>No</button>
    </div>
  );
};
