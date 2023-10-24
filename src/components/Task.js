import { useState } from "react";
import { useTasks } from "../contexts/TasksContext";
import TaskTextEdit from "./TaskEdit";
import TaskDisplay from "./TaskDisplay";

export default function Task({ task, dragging }) {
  // State to track if the task is in editing mode
  const [editing, setEditing] = useState(false);
  // Access the dispatch function from the TasksContext
  const { dispatch } = useTasks();

  // Function to toggle between editing and non-editing modes
  const toggleEditing = () => {
    setEditing(!editing);
  };

  // Function to toggle the status (complete/incomplete) of the task
  const toggleTaskStatus = () => {
    // Dispatch an action to modify the task's status
    dispatch({
      type: "modify",
      id: task.id,
      text: task.text,
      done: !task.done,
    });
  };

  // Function to delete the task
  const deleteTask = () => {
    // Dispatch an action to delete the task
    dispatch({ type: "delete", id: task.id });
  };

  return (
    <div
      className={`border-r-1 mb-2 flex w-full cursor-pointer flex-wrap items-center gap-3 bg-light px-5 shadow-sm hover:bg-slate-200 hover:bg-opacity-60 dark:bg-dark dark:hover:bg-slate-950 ${
        editing ? "bg-slate-200 dark:bg-slate-950" : ""
      } ${
        dragging
          ? "border-1 border-primary bg-slate-200 shadow-slate-400 dark:bg-slate-950 dark:shadow-slate-950"
          : "bg-light dark:bg-black"
      }`}
    >
      <input
        type="checkbox"
        id={`checkbox${task.id}`}
        checked={task.done}
        aria-label={`Mark Task as ${task.done ? "Incomplete" : "Complete"}`}
        onChange={toggleTaskStatus}
        className="cursor-pointer rounded-full border-2 border-primary bg-transparent p-2 text-primary focus:ring-0 dark:border-primary dark:text-primary dark:checked:bg-primary dark:focus:ring-dark"
      />
      {editing ? (
        // Conditional rendering of TaskDisplay or TaskEdit component
        <TaskTextEdit task={task} onSave={toggleEditing} />
      ) : (
        <TaskDisplay task={task} onEdit={toggleEditing} />
      )}
      <button onClick={deleteTask} aria-label="Delete Task">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.7}
          stroke="currentColor"
          className="h-5 w-5 text-icon hover:text-primary dark:text-white dark:hover:text-primary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
    </div>
  );
}
