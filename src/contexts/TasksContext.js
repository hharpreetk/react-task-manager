import { useReducer, useContext, createContext, useEffect } from "react";

const initialTasks = [
  { id: 0, text: "Add your first task", done: false },
  { id: 1, text: "Tap the circle to complete your task", done: false },
];

const localStorageKey = "tasks"; // Key for storing tasks in localStorage

// Create a context for tasks state and dispatch functions
const TasksContext = createContext(null);

// A Provider component to manage tasks state and dispatch
export function TasksProvider({ children }) {
  // Set up the useReducer hook to manage tasks state with reducer
  const [tasks, dispatch] = useReducer(tasksReducer, loadTasksFromStorage());

  // Save the tasks to web storage whenever tasks change
  useEffect(() => {
    saveTasksToStorage(tasks);
  }, [tasks]);

  return (
    // Provide task state and dispatch functions through context
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
}

// Custom hook to access tasks state and dispatch functions
export function useTasks() {
  return useContext(TasksContext);
}

// Reducer function to specify state updates based on actions
const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case "add": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "modify": {
      return tasks.map((task) =>
        action.id === task.id
          ? { ...task, text: action.text, done: action.done }
          : task,
      );
    }
    case "delete": {
      return tasks.filter((task) => task.id !== action.id);
    }
    case "reorder": {
      // Update the tasks with the new order
      return action.tasks;
    }
    default:
      return tasks;
  }
};

// Load tasks from web storage (localStorage)
function loadTasksFromStorage() {
  const tasksJson = localStorage.getItem(localStorageKey);
  return tasksJson ? JSON.parse(tasksJson) : [...initialTasks];
}

// Save tasks to web storage (localStorage)
function saveTasksToStorage(tasks) {
  localStorage.setItem(localStorageKey, JSON.stringify(tasks));
}
