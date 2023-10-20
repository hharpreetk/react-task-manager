import "./App.css";
import { useState } from "react";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [nextId, setNextId] = useState(0);
  const addTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: nextId,
        text: text,
        done: false,
      },
    ]);
    setNextId(nextId+1);
  };

  const modifyTask = (id, text, done) => {
    const newTasks = tasks.map((task) =>
      id === task.id ? { ...task, text, done } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} modifyTask={modifyTask} deleteTask={deleteTask} />
    </div>
  );
}
