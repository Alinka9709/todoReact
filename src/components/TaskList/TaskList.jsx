import React from "react";
import PropTypes from "prop-types";
import Task from "../Task/Task";
import "./TaskList.css";

function TaskList({ todos, onDeleted, onToggleDone }) {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <Task
        key={id}
        {...itemProps}
        onDeleted={() => onDeleted(id)}
        onToggleDone={() => onToggleDone(id)}
      />
    );
  });
  return <ul className="todo-list">{elements}</ul>;
}

export default TaskList;

TaskList.defaultProps = {
  onDeleted: () => {},
  onToggleDone: () => {},
};
TaskList.propTypes = {
  todos: PropTypes.array, // eslint-disable-line
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
};
