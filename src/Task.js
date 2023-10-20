import { useState } from "react";

export default function Task({ task, modifyTask, deleteTask }) {
  // State for handling task text editing
  const [editing, setEditing] = useState(false);

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
