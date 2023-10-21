import { useState } from "react";
import { useTasksDispatch } from "./TasksContext";

export default function Task({ task }) {
  // State for handling task text editing
  const [editing, setEditing] = useState(false);

  // Access tasks state and dispatch function from context
  const dispatch = useTasksDispatch();

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

  let textContent;

  if (editing) {
    // Display an input field for editing
    textContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => modifyTask(task.id, e.target.value, task.done)}
          required
        />
        <button onClick={() => setEditing(false)}>Save</button>
      </>
    );
  } else {
    // Display task text and an 'Edit' button
    textContent = (
      <>
        {task.text}
        <button onClick={() => setEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          modifyTask(task.id, task.text, e.target.checked);
        }}
      />
      {textContent}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </>
  );
}
