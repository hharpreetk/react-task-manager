import "./App.css";
import { useReducer, useState } from "react";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";

// Reducer function to specify state updates based on actions
const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case "add": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "modify": {
      return tasks.map((task) =>
        action.id === task.id
          ? { ...task, text: action.text, done: action.done }
          : task
      );
    }
    case "delete": {
      return tasks.filter((task) => task.id !== action.id);
    }
    default:
      return tasks;
  }
};

export default function App() {
  //TODO: use `useContext` hook to pass `tasks` state and dispatch functions down the component tree

  // Set up the useReducer hook to manage tasks state
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  //? Use `uuid` library to generate random IDs for tasks
  const [nextId, setNextId] = useState(0);

  // Function to add a new task
  const addTask = (text) => {
    // Dispatch an action to add the task
    dispatch({ type: "add", id: nextId, text });

    // Increment the nextId for the next task
    setNextId(nextId + 1);
  };

  // Function to modify an existing task (update text and done status)
  const modifyTask = (id, text, done) => {
    // Dispatch an action to modify the task
    dispatch({ type: "modify", id, text, done });
  };

  // Function to delete a task
  const deleteTask = (id) => {
    // Dispatch an aciton to delete the task
    dispatch({ type: "delete", id });
  };

  return (
    <div className="App">
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} modifyTask={modifyTask} deleteTask={deleteTask} />
    </div>
  );
}
