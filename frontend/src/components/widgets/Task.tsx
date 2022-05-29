import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

import { FiCalendar, FiTrash2 } from "react-icons/fi";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

import Clickable from "../common/Clickable";
import Checkbox from "../common/Checkbox";

export default function Task(props: {
  description: string;
  id: string;
  index: number;
}) {
  const [isComplete, setIsComplete] = useState(false);
  const [description, setDescription] = useState(props.description);
  const [editMode, setEditMode] = useState(false);

  const dispatch = useDispatch();

  const removeTask = () => {
    dispatch({
      type: "REMOVE_TASK",
      payload: {
        id: props.id,
        description: props.description,
      },
    });
  };

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
            className={`
              ${
                editMode &&
                "relative flex-col h-16 z-20 border border-solid border-slate-300/50 items-stretch shadow-lg shadow-slate-200 px-3 py-2 dark:border-slate-400/10 dark:shadow-slate-800/10 dark:bg-slate-800/20"
              }
            `}
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
            <ActionMenu editMode={editMode}>
              <Button buttonType="default">
                <FiCalendar />
              </Button>
              <Button buttonType="destructive" onClick={removeTask}>
                <FiTrash2 />
              </Button>
            </ActionMenu>
          </Clickable>
          {editMode ? (
            <div
              className="absolute z-10 top-0 left-0 h-screen w-screen"
              onClick={() => setEditMode(false)}
            />
          ) : (
            ""
          )}
        </li>
      )}
    </Draggable>
  );
}

const ActionMenu = styled.div`
  ${(props: { editMode: boolean }) =>
    props.editMode ? "display: flex;" : "display: none;"}
  justify-content: flex-end;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 1.4rem;
  width: 1.4rem;
  margin-left: 0.2rem;

  border: none;
  border-radius: 0.2rem;
  background-color: transparent;

  outline: transparent;

  transition: background-color 0.2s cubic-bezier(0.165, 0.84, 0.44, 1),
    outline 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    background-color: ${(props: { buttonType: string }) =>
      props.buttonType === "destructive" ? "#ff000015" : "#0000ff15"};

    outline: 1px solid
      ${(props: { buttonType: string }) =>
        props.buttonType === "destructive" ? "#ff000030" : "#0000ff30"};

    svg {
      color: ${(props: { buttonType: string }) =>
        props.buttonType === "destructive" ? "red" : "blue"};
    }
  }

  svg {
    color: #888;
    width: 1rem;
    stroke-width: 1.5px;
    transition: color 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
`;
