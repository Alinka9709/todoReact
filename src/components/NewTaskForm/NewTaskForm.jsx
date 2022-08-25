import React from 'react';
import PropTypes from 'prop-types';
import './NewTaskForm.css';

export default class NewTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
    };
  }

  onLableChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { label } = this.state;
    const { addItem } = this.props;
    addItem(label);
    this.setState({
      label: '',
    });
  };

  render() {
    const { label } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <input className="new-todo" placeholder="What needs to be done?" onChange={this.onLableChange} value={label} />
      </form>
    );
  }
}

NewTaskForm.defaultProps = {
  addItem: () => {},
};
NewTaskForm.propTypes = {
  addItem: PropTypes.func,
};
