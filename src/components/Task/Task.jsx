import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './Task.css'

export default function Task({ label, onDeleted, onToggleDone, done, date }) {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMitutes] = useState(0)
  const [run, setRun] = useState(false)

  const startTimer = () => {
      setRun(true)
  }
  const pauseTimer = () => {
      setRun(false)
  }
  useEffect(() => {
      let interval
      if (run === true) {
          interval = setInterval(() => {
              // eslint-disable-next-line no-shadow
              setSeconds((seconds) => seconds + 1)
              if (seconds === 60) {
                  setMitutes((mitutes) => mitutes + 1)
                  setSeconds(seconds === 0)
              }
          }, 1000)
      }
      return () => clearInterval(interval)
  }, [run, seconds])

  let nameClass = '';
  if (done) {
    nameClass += 'completed';
  }
  return (
    <li className={nameClass}>
      <div className="view">
        <input className="toggle" type="checkbox" onMouseDown={onToggleDone} />
        <label htmlFor="myspan">
          <span className="title">{label}</span>
          <span className="description">
                  <button className="icon icon-play" onClick={startTimer}></button>
                  <button className="icon icon-pause" onClick={pauseTimer}></button>
                  {minutes}:{seconds}
                </span>
          <span className="description">{`created${date(label)}`}</span>
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
