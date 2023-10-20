/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from "react";

export default function TaskInput({ addTask }) {
  //? Use custom hook for input and error handling
  // State for input value and error handling
  const [value, setValue] = useState("");
  //? Seperate componenet for error message
  const [error, setError] = useState(null);

  // Function to handle form submission and add a new task
  // TODO: Do not add duplicate tasks
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      setError(Error("Input cannot be empty."));
    } else {
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
      <button>Add Task</button>
      {error && <p>{error.message}</p>}
    </form>
  );
}
