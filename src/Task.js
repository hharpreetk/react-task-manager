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
      <form
        onSubmit={handleSave}
        className="flex flex-1"
      >
        <input
          value={editedText}
          className="my-2.5 min-w-0 flex-1 border-none bg-transparent px-0 py-1 focus:outline-none focus:ring-0 dark:text-white"
          maxLength={255}
          autoFocus
          onChange={(e) => setEditedText(e.target.value)}
        />
        <button
          disabled={!editedText.trim()} // Disable the  button when there's no text input
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="text-primary h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </form>
    );
  } else {
    // Display task text and an 'Edit' button
    textContent = (
      <>
        <p className="my-3.5 mb-4 flex-1 break-words leading-5 dark:text-white">
          {task.text}
        </p>
        <button onClick={() => setEditing(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="text-primary h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </button>
      </>
    );
  }

  return (
    <>
      <input
        type="checkbox"
        checked={task.done}
        aria-label="Toggles the task between complete and incomplete"
        onChange={(e) => {
          modifyTask(task.id, task.text, e.target.checked);
        }}
        className="border-primary dark:border-primary text-primary dark:text-primary dark:checked:bg-primary bg-transparent cursor-pointer rounded-full border-2 p-2 focus:ring-0"
      />
      {textContent}
      <button onClick={() => deleteTask(task.id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="text-primary h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
    </>
  );
}
