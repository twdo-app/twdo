import React, { useEffect, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { usePomodoro } from "../store/usePomodoro";
import { useTasks } from "../store/useTasks";

export default function DnD({ children }: { children: React.ReactNode }) {
  const taskStore = useTasks((state) => state);

  const pomodoroStore = usePomodoro((state) => state);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    if (
      result.destination.index === result.source.index &&
      result.destination.droppableId === result.source.droppableId
    )
      return;
    if (result.destination.droppableId === "pomodoro") {
      pomodoroStore.setPomodoroTaskDescription(
        taskStore.tasks[result.source.index].description
      );
      pomodoroStore.show();
    } else {
      taskStore.reorderTasks(result.source.index, result.destination.index);
    }
  };

  // This prevents content being loaded without an ID (makes react-beautiful-dnd work with Next.js)
  const [winReady, setWinReady] = useState(false);

  useEffect(() => {
    setWinReady(true);
  }, [winReady]);

  return winReady ? (
    <DragDropContext
      onDragEnd={onDragEnd}
      onDragStart={() => taskStore.setIsDraggingTask(true)}
    >
      {children}
    </DragDropContext>
  ) : null;
}
