import { useReducer, useContext, createContext } from "react";

// Create a context for tasks state and dispatch functions
const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

// A Provider component to manage tasks state and dispatch
export function TasksProvider({ children }) {
  // Set up the useReducer hook to manage tasks state with reducer
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    // Provide task state and dispatch functions through context
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

// Custom hook to access tasks state
export function useTasks() {
  return useContext(TasksContext);
}

// Custom hook to access tasks dispatch functions
export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
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
          : task
      );
    }
    case "delete": {
      return tasks.filter((task) => task.id !== action.id);
    }
    default:
      return tasks;
  }
};
