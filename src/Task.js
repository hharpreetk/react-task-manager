import { useState } from "react";
import { useTasks } from "./TasksContext";

export default function Task({ task }) {
  // State for handling task text editing
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text); // State to track edited text

  // Access dispatch function from context
  const { dispatch } = useTasks();

  // Function to handle saving changes when the "Save" button is clicked
  const handleSave = () => {
    // Check if the trimmed edited text is not empty
    const trimmedEditedText = editedText.trim();
    // Call the function to modify the task
    if (trimmedEditedText) modifyTask(task.id, trimmedEditedText, task.done);
    // Switch back to task text display
    setEditing(false);
  };

  // Function to modify an existing task (update text and done status)
  const modifyTask = (id, text, done) => {
    if (text !== task.text || done !== task.done) {
      // Dispatch an action to modify the task only if changes are made
      dispatch({ type: "modify", id, text, done });
    }
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
          value={editedText}
          maxLength={255}
          onChange={(e) => setEditedText(e.target.value)}
        />
        <button
          onClick={handleSave}
          disabled={!editedText.trim()} // Disable the  button when there's no text input
        >
          Save
        </button>
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
