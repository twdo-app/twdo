import { useState, useRef, useEffect } from "react";

import { FiCalendar, FiTrash2 } from "react-icons/fi";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

import Clickable from "./common/Clickable";
import Checkbox from "./common/Checkbox";
import { useStore } from "../store/useStore";
import DimScreen from "./common/DimScreen";

export default function Task(props: {
  description: string;
  id: string;
  index: number;
}) {
  const [isComplete, setIsComplete] = useState(false);
  const [description, setDescription] = useState(props.description);
  const [editMode, setEditMode] = useState(false);

  const removeTask = useStore((state) => state.removeTask);

  const inputElement = useRef<HTMLInputElement>(null);

  const toggleIsComplete = (e: any) => {
    e.stopPropagation();
    setIsComplete(!isComplete);
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
      if (e.key === "Escape" || e.key === "Enter") setEditMode(false);
    });

    if (description === "") {
      setEditMode(true);
    }
  }, [description]);

  useEffect(() => {
    if (inputElement.current != null) {
      editMode ? inputElement.current.focus() : inputElement.current.blur();
    }
  }, [editMode]);

  useEffect(() => {
    if (isComplete) {
      setTimeout(removeTask, 3000);
    }
  }, [isComplete]);

  return (
    <Draggable draggableId={props.id} index={props.index}>
      {(provided) => (
        <li
          className="hover:cursor-default"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Clickable
            className={
              editMode
                ? `
              ${"relative flex-col h-16 z-20 border border-solid border-slate-300/50 items-stretch shadow-lg shadow-slate-200 px-3 py-2 dark:border-slate-400/10 dark:shadow-slate-800/10 dark:bg-slate-800/20"}
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
              onChange={(e) => setDescription(e.target.value)}
            />
          </Clickable>
          <DimScreen hidden={!editMode} onClick={() => setEditMode(false)} />
        </li>
      )}
    </Draggable>
  );
}
