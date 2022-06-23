import { useState, useRef, useEffect } from "react";

import { Draggable } from "react-beautiful-dnd";

import Clickable from "./common/Clickable";
import Checkbox from "./common/Checkbox";
import DimScreen from "./common/DimScreen";
import { api } from "../services/api";
import { useTasks } from "../store/useTasks";

export default function Task(props: {
  id: string;
  description: string;
  index: number;
}) {
  const [isComplete, setIsComplete] = useState(false);
  const [description, setDescription] = useState(props.description);
  const [editMode, setEditMode] = useState(false);
  const removeTask = useTasks((state) => state.removeTask);

  const inputElement = useRef<HTMLInputElement>(null);

  const toggleIsComplete = (e: any) => {
    e.stopPropagation();
    setIsComplete(!isComplete);
    removeTask(props.id);
  };

  const startFocusAtTheEndOfTheLine = (
    e: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    e.currentTarget.setSelectionRange(
      e.currentTarget.value.length,
      e.currentTarget.value.length
    );
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" || e.key === "Enter") {
        setEditMode(false);
      }
    });

    if (description === "") {
      setEditMode(true);
    }
  }, [description, props]);

  useEffect(() => {
    if (inputElement.current != null) {
      editMode ? inputElement.current.focus() : inputElement.current.blur();
    }
  }, [editMode]);

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

  return (
    <Draggable draggableId={props.id} index={props.index}>
      {(provided, snapshot) => {
        return (
          <li
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={getStyle(provided.draggableProps.style, snapshot)}
          >
            <Clickable
              className={
                editMode
                  ? `
              ${"relative flex-col h-14 z-20 border border-solid border-slate-300/50 items-stretch px-3 py-2 dark:border-slate-400/10 dark:shadow-slate-800/10 dark:bg-slate-800/20 dark:hover:bg-slate-800/20 dark:hover:outline-transparent"}
            `
                  : ""
              }
              hoverDisabled={editMode}
              onClick={() => setEditMode(true)}
            >
              <Checkbox
                hidden={editMode}
                checked={isComplete}
                onClick={(e) => toggleIsComplete(e)}
              />
              <input
                disabled={!editMode}
                value={description}
                ref={inputElement}
                className={`
                w-full bg-transparent z-[-10]
                cursor-${editMode ? "text" : "default"}
              `}
                onFocus={(e) => startFocusAtTheEndOfTheLine(e)}
                onChange={(e) => {
                  setDescription(e.target.value);
                  api.put(`/tasks/${props.id}`, {
                    description: description,
                    projectId: "0",
                    inboxIndex: props.index.toString(),
                    projectIndex: "0",
                  });
                }}
              />
            </Clickable>
            <DimScreen
              hidden={!editMode}
              onClick={() => {
                setEditMode(false);
              }}
            />
          </li>
        );
      }}
    </Draggable>
  );
}
