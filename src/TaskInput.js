import { useState } from "react";
import { useTasks } from "./TasksContext";

export default function TaskInput() {
  // State for input text
  const [text, setText] = useState("");

  // Access tasks state and dispatch function from context
  const { tasks, dispatch } = useTasks();

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
    <div className="addTask mx-auto w-full max-w-6xl">
      <form
        onSubmit={handleSubmit}
        className="bg-light dark:bg-dark m-5 flex items-center gap-2 px-4 py-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="text-primary -mx-0.5 h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <input
          type="text"
          value={text}
          maxLength={255}
          onChange={(e) => setText(e.target.value)}
          className="min-w-0 flex-1 border-none bg-transparent p-1 focus:outline-none focus:ring-0 dark:text-white"
          placeholder="Add a Task"
          autoFocus
        />
        <button
          disabled={!text.trim()}
          aria-label="Add"
          className="bg-primary hover:bg-primary_hover rounded-lg px-3 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-0 disabled:bg-light disabled:text-gray-500 dark:disabled:bg-dark dark:disabled:text-slate-400"
        >
          Add
        </button>
      </form>
    </div>
  );
}
