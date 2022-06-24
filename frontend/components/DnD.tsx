import React, { useEffect, useState } from "react";
import {
  DragDropContext,
  DragUpdate,
  DropResult,
  ResponderProvided,
} from "react-beautiful-dnd";
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
    } else {
      taskStore.reorderTasks(result.source.index, result.destination.index);
    }
  };

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
