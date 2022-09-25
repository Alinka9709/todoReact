import React from "react";
import PropTypes from "prop-types";
import "./TasksFilter.css";

function TasksFilter({ filter, onFilterGhange }) {
  const buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" },
  ];
  const buttonsEl = buttons.map(({ name, label }) => {
    const isActive = filter === name;
    const cl = isActive ? "selected" : "clear-completed";
    return (
      <li key={name}>
        <button
          type="button"
          onClick={() => onFilterGhange(name)}
          className={` btn ${cl}`}
        >
          {label}
        </button>
      </li>
    );
  });
  return <ul className="filters">{buttonsEl}</ul>;
}

export default TasksFilter;

TasksFilter.propTypes = {
  onFilterGhange: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
};
