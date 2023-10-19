import { useState } from "react";

export default function Task({ task, toggleDone, deleteTask, changeTask }) {
  const [editing, setEditing] = useState(false);
  let textContent;
  if (editing) {
    textContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => changeTask(task.id, e.target.value)}
          required
        />
        <button onClick={() => setEditing(false)}>Save</button>
      </>
    );
  } else {
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
          toggleDone(task.id, e.target.checked);
        }}
      />
      {textContent}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </>
  );
}
