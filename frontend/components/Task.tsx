import { useEffect, useRef, useState } from "react";

import { Draggable } from "react-beautiful-dnd";

import Clickable from "./common/Clickable";
import Checkbox from "./common/Checkbox";
import { task } from "../types";
import { useTasks } from "../store/useTasks";
import { useDimScreen } from "../store/useDimScreen";

export default function Task({
  task,
  isTaskBeingEdited,
}: {
  task: task;
  isTaskBeingEdited: boolean;
}) {
  const tasksStore = useTasks((state) => state);
  const dimScreen = useDimScreen((state) => state);
  const [isComplete, setIsComplete] = useState(false);

  const inputElement = useRef<HTMLInputElement>(null);

  const toggleIsComplete = (e: any) => {
    setIsComplete(!isComplete);
    e.stopPropagation();
  };

  const startFocusAtTheEndOfTheLine = (
    e: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    e.currentTarget.setSelectionRange(
      e.currentTarget.value.length,
      e.currentTarget.value.length
    );
  };

  function getStyle(style: any, snapshot: any) {
    if (!snapshot.isDropAnimating) {
      return style;
    }
    return {
      ...style,
      transitionDuration: `0.001s`,
      opacity: 0,
    };
  }

  const startEditingTask = () => {
    tasksStore.startEditingTask(task.id);
    dimScreen.enableDimScreen();
    inputElement.current?.focus();
  };

  const stopEditingTask = () => {
    tasksStore.stopEditingTask();
    dimScreen.disableDimScreen();
    inputElement.current?.blur();
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" || e.key === "Enter") stopEditingTask();
    });

    if (task.description === "") {
      startEditingTask();
    }
  }, []);

  return (
    <Draggable
      draggableId={task.id.toString()}
      index={task.inboxIndex ? parseInt(task.inboxIndex) : 0}
      isDragDisabled={isTaskBeingEdited}
    >
      {(provided, snapshot) => {
        return (
          <li
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Clickable
              className={`relative flex flex-row rounded-md cursor-pointer transition-all border-transparent border active:bg-slate-100/20 ${
                isTaskBeingEdited
                  ? "z-30 border-2 h-16 border-solid bg-slate-50/80 border-slate-200 hover:cursor-text items-start px-3 py-2"
                  : "items-center  p-1"
              }`}
              disabled={isTaskBeingEdited}
              onClick={startEditingTask}
            >
              <Checkbox
                hidden={isTaskBeingEdited}
                checked={isComplete}
                onClick={(e) => {
                  toggleIsComplete(e);
                  setTimeout(() => {
                    tasksStore.removeTask(task.id);
                  }, 1000);
                }}
              />
              <input
                value={task.description}
                ref={inputElement}
                className={`
                w-full bg-transparent z-[-10] outline-none transition-all
                ${isTaskBeingEdited ? "translate-x-[-1.5rem]" : ""}
              `}
                onFocus={(e) => startFocusAtTheEndOfTheLine(e)}
                onChange={(e) => {
                  tasksStore.changeTaskDescription(task.id, e.target.value);
                }}
              />
            </Clickable>
          </li>
        );
      }}
    </Draggable>
  );
}
