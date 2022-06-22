import { useEffect, useState } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useStore } from "../store/useStore";
import Task from "./Task";

export default function TaskView() {
  const [loadedContent, setLoadedContent] = useState(<></>);
  const setIsDraggingTask = useStore((state) => state.setIsDraggingTask);
  const setPomodoroTaskDescription = useStore(
    (state) => state.setPomodoroTaskDescription
  );
  const pomodoroTaskDescription = useStore(
    (state) => state.pomodoroTaskDescription
  );
  const tasks = useStore((state) => state.tasks);

  const reorder = useStore((state) => state.reorderTasks);

  useEffect(() => {
    const onDragEnd = (result: DropResult) => {
      setIsDraggingTask(false);
      if (!result.destination) return;
      console.log(result.destination.droppableId);
      if (result.destination.droppableId === "pomodoro") {
        setPomodoroTaskDescription(tasks[result.source.index].description);
      }
      if (result.destination.index === result.source.index) return;
      reorder(result.source.index, result.destination.index);
    };

    setLoadedContent(
      <DragDropContext
        onDragEnd={onDragEnd}
        onDragStart={() => setIsDraggingTask(true)}
      >
        <Droppable droppableId="list">
          {(provided) => (
            <ul
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="shrink w-full"
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
  }, [
    tasks,
    reorder,
    pomodoroTaskDescription,
    setIsDraggingTask,
    setPomodoroTaskDescription,
  ]);

  return loadedContent;
}
