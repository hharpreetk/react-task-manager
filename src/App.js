import './App.css';
import { useState } from "react";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const addTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false
      }
    ]);
  };
  return (
    <div className="App">
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false }
];