import React, { useState } from "react";

import PropTypes from "prop-types";
import "./NewTaskForm.css";

function NewTaskForm({ addItem }) {
  const [name, setName] = useState("");

  const onLableChange = (e) => {
    setName(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addItem(name);
    setName("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={name}
        onChange={onLableChange}
      />
    </form>
  );
}

export default NewTaskForm;

NewTaskForm.defaultProps = {
  addItem: () => {},
};
NewTaskForm.propTypes = {
  addItem: PropTypes.func,
};
