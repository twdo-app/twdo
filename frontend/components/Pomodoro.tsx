import { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useStore } from "../store/useStore";

export default function Pomodoro() {
  const [loadedContent, setLoadedContent] = useState(<></>);

  const pomodoroTaskDescription = useStore(
    (state) => state.pomodoroTaskDescription
  );

  const setIsDraggingTask = useStore((state) => state.setIsDraggingTask);

  useEffect(() => {
    const onDragEnd = (result: any) => {
      setIsDraggingTask(false);
      if (!result.destination) return;
      if (result.destination.index === result.source.index) return;
    };

    setLoadedContent(
      <DragDropContext
        onDragEnd={onDragEnd}
        onDragStart={() => setIsDraggingTask(true)}
      >
        <Droppable droppableId="pomodoro">
          {(provided) => (
            <ul
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="shrink h-full w-full"
            >
              <h1>hehehehe {pomodoroTaskDescription}</h1>
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    );
  }, [pomodoroTaskDescription, setIsDraggingTask]);

  return loadedContent;
}
