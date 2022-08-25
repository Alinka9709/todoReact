/* eslint-disable class-methods-use-this */
import React from 'react';
import './App.css';
import { formatDistance } from 'date-fns';

import Footer from '../Footer/Footer';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import TackList from '../TaskList/TaskList';

export default class App extends React.Component {
  maxId = 0;

  constructor() {
    super();
    this.state = {
      todoDate: [
        { label: ' 4.2.7', id: 1 },
        { label: 'bbbb', id: 2 },
        { label: 'cccc', id: 3 },
      ],
      filter: '',
    };
  }

  addItem = (text) => {
    const newItem = this.createNewTask(text);
    this.setState(({ todoDate }) => {
      const newArr = [...todoDate, newItem];
      return { todoDate: newArr };
    });
  };

  deleteItem = (id) => {
    this.setState(({ todoDate }) => {
      const idx = todoDate.findIndex((el) => el.id === id);
      const newArray = [...todoDate.slice(0, idx), ...todoDate.slice(idx + 1)];
      return {
        todoDate: newArray,
      };
    });
  };

 

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

 
  deleteItems = () => {
    this.setState(({ todoDate }) => {
      const doneCount = todoDate.filter((el) => !el.done);
      return {
        todoDate: doneCount,
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoDate }) => {
      const idx = todoDate.findIndex((el) => el.id === id);

      const oldItem = todoDate[idx];
      const newItem = { ...oldItem, done: !oldItem.done };
      const newArray = [...todoDate.slice(0, idx), newItem, ...todoDate.slice(idx + 1)];
      return {
        todoDate: newArray,
      };
    });
  };

  date = () => {
    const date = new Date();
    return formatDistance(date, new Date(), { addSuffix: true });
  };

  filter(items, filter) {
    if (filter === 'all') {
      return items;
    }
    if (filter === 'active') {
      return items.filter((item) => !item.done);
    }
    if (filter === 'done') {
      return items.filter((item) => item.done);
    }
    return items;
  }

  createNewTask(label) {
    return {
      label,
      done: false,
      id: Math.random(this.maxId) 
    };
  }

  render() {
    const { todoDate, filter } = this.state;
    const doneCount = todoDate.filter((el) => el.done).length;
    const todoCount = todoDate.length - doneCount;

    const visibility = this.filter(todoDate, filter);
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
        </header>

        <NewTaskForm addItem={this.addItem} />
        <TackList todos={visibility} onToggleDone={this.onToggleDone} onDeleted={this.deleteItem} date={this.date} />
        <Footer
          todoCount={todoCount}
          filter={filter}
          onFilterChange={this.onFilterChange}
          deleteItems={this.deleteItems}
        />
      </section>
    );
  }
}
