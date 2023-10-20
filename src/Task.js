import { useState } from "react";

export default function Task({ task, modifyTask, deleteTask }) {
  const [editing, setEditing] = useState(false);
  let textContent;
  if (editing) {
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
