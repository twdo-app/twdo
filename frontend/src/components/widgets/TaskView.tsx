import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { tasksState } from "../../reducers/tasksReducer";
import { task } from "../../types";
import Task from "./Task";

export default function TaskView() {
  const tasks = useSelector<tasksState, tasksState["tasks"]>(
    (state) => state.tasks
  );

  const reorder = (list: task[], startIndex: number, endIndex: number) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    if (result.destination.index === result.source.index) return;

    const reorderedTasks = reorder(
      tasks,
      result.source.index,
      result.destination.index
    );

    console.log(tasks);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <ul
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="shrink h-full w-full"
          >
            {tasks?.map((task, i) => (
              <Task
                description={task.description}
                id={task.id}
                key={task.id}
                index={i}
              />
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}
