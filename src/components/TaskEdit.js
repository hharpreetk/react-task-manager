import React, { useState } from "react";
import { useTasks } from "../contexts/TasksContext";

export default function TaskEdit({ task, onSave }) {
  // State to track the edited text
  const [editedText, setEditedText] = useState(task.text);
  // Access the dispatch function from the TasksContext
  const { dispatch } = useTasks();

  // Function to save changes when the "Save" button is clicked
  const saveChanges = (e) => {
    e.preventDefault();
    const trimmedEditedText = editedText.trim();
    if (trimmedEditedText !== task.text) {
      // Dispatch an action to modify the task text
      dispatch({
        type: "modify",
        id: task.id,
        text: trimmedEditedText,
        done: task.done,
      });
    }
    // Call the onSave callback to exit editing mode
    onSave();
  };

  return (
    <form onSubmit={saveChanges} className="flex min-w-0 flex-1">
      <input
        value={editedText}
        className="my-2.5 min-w-0 flex-1 border-none bg-transparent px-0 py-1 focus:outline-none focus:ring-0 dark:text-white"
        maxLength={255}
        autoFocus
        aria-label="Edit Task Text"
        onChange={(e) => setEditedText(e.target.value)}
      />
      <button aria-label="Save Changes" disabled={!editedText.trim()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="-1 0 24 24"
          strokeWidth={1.6}
          stroke="currentColor"
          className="ml-0.5 h-6 w-6 text-primary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </form>
  );
}
