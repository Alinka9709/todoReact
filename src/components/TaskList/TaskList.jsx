/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import Task from '../Task/Task';
import './TaskList.css';

export default function TaskList({ todos, onDeleted, onToggleDone, date }) {


  const elements = todos.map((items) => (
    <Task
      key={items.id}
      {...items}
      onDeleted={() => onDeleted(items.id)}
      onToggleDone={() => onToggleDone(items.id)}
      date={date}
    />
  ));

  return (
    <>
      <ul className="todo-list">{elements}</ul>
    </>
  );
}

TaskList.defaultProps = {
  date: Date.now(),
  onDeleted: () => {},
  onToggleDone: () => {},
  done: false,
};
TaskList.propTypes = {
  done: PropTypes.bool,
  onDeleted: PropTypes.func,
  date: PropTypes.func,
  onToggleDone: PropTypes.func,
};
