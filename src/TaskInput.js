import { useState } from "react";
import { useTasks, useTasksDispatch } from "./TasksContext";

export default function TaskInput() {
  // State for input value and error handling
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  // Access tasks state and dispatch function from context
  const tasks = useTasks();
  const dispatch = useTasksDispatch();

  // Function to add a new task
  const addTask = (text) => {
    // Generate a new task ID by finding the maximum ID in existing tasks
    const nextId =
      tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 0;

    // Dispatch an action to add the task
    dispatch({ type: "add", id: nextId, text });
  };

  // Function to handle form submission and add a new task
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      // Set an error if the input is empty
      setError(Error("Input cannot be empty."));
    } else {
      // Clear any existing error and add the task
      setError(null);
      addTask(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button disabled={!value}>Add Task</button>
      {error && <p>{error.message}</p>}
    </form>
  );
}
