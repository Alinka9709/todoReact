/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";

function Task({ name, onDeleted, onToggleDone, done }) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMitutes] = useState(0);
  const [run, setRun] = useState(false);

  const startTimer = () => {
    setRun(true);
  };
  const pauseTimer = () => {
    setRun(false);
  };
  useEffect(() => {
    let interval;
    if (run === true) {
      interval = setInterval(() => {
        // eslint-disable-next-line no-shadow
        setSeconds((seconds) => seconds + 1);
        if (seconds === 60) {
          setMitutes((mitutes) => mitutes + 1);
          setSeconds(seconds === 0);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [run, seconds]);
  let nameClass = "";
  if (done) {
    nameClass += "completed";
  }
  const time = () => {
    const date = new Date();
    const result = date.getTime();
    return result;
  };
  return (
    <li className={nameClass}>
      <div className="view">
        <input className="toggle" type="checkbox" onMouseDown={onToggleDone} />
        <label htmlFor="myspan">
          <span className="title">{name}</span>
          <span className="description">
            <button
              className="icon icon-play"
              aria-label="button"
              type="button"
              onClick={startTimer}
            />
            <button
              className="icon icon-pause"
              aria-label="button"
              type="button"
              onClick={pauseTimer}
            />
            {minutes}:{seconds}
          </span>

          <span className="description">
            {formatDistanceToNow(time(), { includeSeconds: true })}
          </span>
        </label>
        <button type="button" aria-label="Save" className="icon icon-edit" />
        <button
          type="button"
          aria-label="Save"
          className="icon icon-destroy"
          onClick={onDeleted}
        />
      </div>
    </li>
  );
}

export default Task;

Task.defaultProps = {
  onDeleted: () => {},
  onToggleDone: false,
  done: false,
};
Task.propTypes = {
  name: PropTypes.string.isRequired,
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  done: PropTypes.bool,
};
