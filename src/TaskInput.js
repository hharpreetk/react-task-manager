import { useState } from "react";
import { useTasks } from "./TasksContext";

export default function TaskInput() {
  // State for input text
  const [text, setText] = useState("");

  // Access tasks state and dispatch function from context
  const {tasks, dispatch} = useTasks();

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
    const trimmedText = text.trim();
    if (trimmedText) {
      addTask(trimmedText);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        maxLength={255}
        onChange={(e) => setText(e.target.value)}
      />
      <button disabled={!text.trim()}>Add Task</button>
    </form>
  );
}
