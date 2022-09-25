import React, { useState } from "react";

import Footer from "../Footer/Footer";

import NewTaskForm from "../NewTaskForm/NewTaskForm";

import TaskList from "../TaskList/TaskList";
import "./App.css";

const maxId = 0;
function App() {
  const createNewTask = (name) => ({
    name,
    done: false,
    id: Math.random(maxId),
  });

  const todos = [
    createNewTask("Drink coffe"),
    createNewTask("I Like Sea"),
    createNewTask("I Like Serf "),
  ];

  const [todoTask, setTodoTask] = useState(todos);

  const [filtration, setFiltration] = useState("");
  const deleteItem = (id) => {
    setTodoTask((task) => {
      const newArr = task.filter((el) => el.id !== id);
      return newArr;
    });
  };
  const deleteItems = () => {
    setTodoTask((task) => {
      const newArr = task.filter((el) => !el.done);
      return newArr;
    });
  };

  const addItem = (item) => {
    const newItem = createNewTask(item);

    setTodoTask((task) => {
      const newArray = [...task, newItem];
      return newArray;
    });
  };
  const onToggleDone = (id) => {
    setTodoTask((task) => {
      const idx = task.findIndex((el) => el.id === id);
      const oldItem = task[idx];
      const newItem = { ...oldItem, done: !oldItem.done };
      const newArray = [...task.slice(0, idx), newItem, ...task.slice(idx + 1)];
      return newArray;
    });
  };
  const filter = (items, filteres) => {
    if (filteres === "all") {
      return items;
    }
    if (filteres === "active") {
      return items.filter((item) => !item.done);
    }
    if (filteres === "done") {
      return items.filter((item) => item.done);
    }
    return items;
  };
  const onFilterGhange = (filters) => {
    setFiltration(filters);
  };
  const visibleItems = filter(todoTask, filtration);
  const doneCount = todoTask.filter((el) => el.done).length;
  const todoCount = todoTask.length - doneCount;

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
      </header>

      <NewTaskForm addItem={addItem} />
      <TaskList
        todos={visibleItems}
        onDeleted={deleteItem}
        onToggleDone={onToggleDone}
      />
      <Footer
        todoCount={todoCount}
        filter={filter}
        onFilterGhange={onFilterGhange}
        deleteItems={deleteItems}
      />
    </section>
  );
}

export default App;
