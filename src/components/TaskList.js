import Task from "./Task";
import { useTasks } from "../contexts/TasksContext";
import { useSearchQuery } from "../contexts/SearchQueryContext";
import CompletedTasks from "./CompletedTasks";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { StrictModeDroppable } from "./Droppable";

export default function TaskList() {
  // Access tasks state from context
  const { tasks } = useTasks();
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
    if (!result.destination) {
      return;
    }
    //TODO: Reorder the tasks based on the drag-and-drop result
  };

  // Render a list of tasks
  return (
    <div className="tasks mx-auto w-full max-w-6xl">
      <DragDropContext onDragEnd={onDragEnd}>
        <StrictModeDroppable droppableId="task-list">
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="mx-5 my-2 flex flex-1 list-none flex-col gap-2"
              aria-label="List of tasks"
            >
              {incompleteTasks.map((task, index) => (
                <Draggable
                  key={task.id.toString()}
                  draggableId={task.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Task task={task} />
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
