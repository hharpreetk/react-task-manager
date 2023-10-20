import "./App.css";
import { useState } from "react";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";

export default function App() {
  //TODO: Use useReducer hook for state management
  // State for tasks and the next available task ID
  const [tasks, setTasks] = useState([]);
  //? Use `uuid` library to generate random IDs for tasks
  const [nextId, setNextId] = useState(0);

  // Function to add a new task
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

  // Function to modify an existing task (update text and done status)
  const modifyTask = (id, text, done) => {
    const newTasks = tasks.map((task) =>
      id === task.id ? { ...task, text, done } : task
    );
    setTasks(newTasks);
  };

  // Function to delete a task
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
