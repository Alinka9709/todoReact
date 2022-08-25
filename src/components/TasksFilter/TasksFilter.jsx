import React from 'react';
import './TasksFilter.css';
import PropTypes from 'prop-types';

export default class TaskFilter extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = [
      { name: 'all', label: 'All' },
      { name: 'active', label: 'Active' },
      { name: 'done', label: 'Done' },
    ];
  }

  render() {
    const { filter, onFilterChange } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const actClass = isActive ? 'selected' : 'buntton';
      return (
        <li key={name}>
          <button type="button" className={`btn ${actClass}`} onClick={() => onFilterChange(name)}>
            {label}
          </button>
        </li>
      );
    });
    return <ul className="filters">{buttons}</ul>;
  }
}
TaskFilter.defaultProps = {
  onFilterChange: () => {},
};
TaskFilter.propTypes = {
  onFilterChange: PropTypes.func,
};
