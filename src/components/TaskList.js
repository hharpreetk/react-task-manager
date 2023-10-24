import Task from "./Task";
import { useTasks } from "../contexts/TasksContext";
import { useSearchQuery } from "../contexts/SearchQueryContext";
import CompletedTasks from "./CompletedTasks";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { StrictModeDroppable } from "./Droppable";

export default function TaskList() {
  // Access tasks state from context
  const { tasks, dispatch } = useTasks();
  const { searchQuery } = useSearchQuery();

  if (!tasks || tasks.length === 0) return; // Early return if there are no tasks

  // Filter tasks based on the search query
  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Separate completed and incomplete tasks
  const completedTasks = filteredTasks.filter((task) => task.done);
  const incompleteTasks = filteredTasks.filter((task) => !task.done);

  const onDragEnd = (result) => {
    const { destination, source } = result;
    // Exit when there is no destination
    if (!destination) {
      return;
    }

    // Exit if the destination did not change
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // Reorder the tasks based on the drag-and-drop result
    const reorderedTasks = [...incompleteTasks]; // Create a copy of the tasks array
    // Move the task from old index to new index in the array
    const [movedTask] = reorderedTasks.splice(result.source.index, 1); // Remove the task from source index
    reorderedTasks.splice(destination.index, 0, movedTask); // Insert the moved task back into the array at destination index

    // Dispatch a reorder action to update the tasks in the context
    dispatch({
      type: "reorder",
      tasks: [...reorderedTasks, ...completedTasks],
    });
  };

  // Render a list of tasks
  return (
    <div className="tasks mx-auto w-full max-w-6xl">
      <DragDropContext onDragEnd={onDragEnd}>
        <StrictModeDroppable droppableId="task-list">
          {(provided, snapshot) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="mx-5 my-2 flex flex-1 list-none flex-col"
              aria-label="List of tasks"
            >
              {incompleteTasks.map((task, index) => (
                <Draggable
                  key={task.id.toString()}
                  draggableId={task.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Task task={task} dragging={snapshot.isDragging} />
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </StrictModeDroppable>
      </DragDropContext>
      {completedTasks.length > 0 && (
        <CompletedTasks completedTasks={completedTasks} />
      )}
    </div>
  );
}
