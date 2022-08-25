import React from 'react';
import PropTypes from 'prop-types';

export default function Task({ label, onDeleted, onToggleDone, done, date }) {

  let nameClass = '';
  if (done) {
    nameClass += 'completed';
  }
  return (
    <li className={nameClass}>
      <div className="view">
        <input className="toggle" type="checkbox" onMouseDown={onToggleDone} />
        <label htmlFor="myspan">
          <span className="description">{label}</span>
          <span className="created">{`created${date(label)}`}</span>
        </label>
        <button type="button" aria-label="Save" className="icon icon-edit" />
        <button type="button" aria-label="Save" className="icon icon-destroy" onClick={onDeleted} />
      </div>
    </li>
  );
}
Task.defaultProps = {
  onDeleted: () => {},
  onToggleDone: false,
  done: false,
};
Task.propTypes = {
  done: PropTypes.bool,
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
};
