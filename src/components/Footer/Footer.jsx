import React from 'react';
import './Footer.css';
import PropTypes from 'prop-types';

import TasksFilter from '../TasksFilter/TasksFilter';

function Footer({ todoCount, filter, onFilterChange, deleteItems }) {
  return (
    <footer className="footer">
      <span className="todo-count">{todoCount} items left</span>
      <TasksFilter filter={filter} onFilterChange={onFilterChange} />
      <button type="button" className="clear-completed" onClick={() => deleteItems()}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;

Footer.defaultProps = {
  deleteItems: () => {},
};

Footer.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  todoCount: PropTypes.number.isRequired,
  deleteItems: PropTypes.func,
};
