import { useState } from "react";

export default function TaskInput({ addTask }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);
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
