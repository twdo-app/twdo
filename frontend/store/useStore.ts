import create from "zustand";
import { v4 as uuid } from "uuid";

import { task } from "../types";

interface TasksState {
  tasks: task[];
  isDraggingTask: boolean;
  pomodoroTaskDescription: string;
  setPomodoroTaskDescription: (description: string) => void;
  addTask: (description: string) => void;
  removeTask: (id: string) => void;
  reorderTasks: (startIndex: number, endIndex: number) => void;
  setIsDraggingTask: (isDraggingTask: boolean) => void;
}

export const useStore = create<TasksState>((set) => ({
  tasks: [
    {
      id: "1",
      description: "task",
    },
    {
      id: "2",
      description: "task2",
    },
    {
      id: "3",
      description: "task2",
    },
  ],
  pomodoroTaskDescription: "",
  setPomodoroTaskDescription: (description) => {
    set((state) => ({
      pomodoroTaskDescription: description,
    }));
  },
  isDraggingTask: false,
  addTask: (description: string) => {
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          id: uuid(),
          description,
        } as task,
      ],
    }));
  },
  removeTask: (id) => {
    set((state) => ({
      tasks: state.tasks.filter((todo) => todo.id !== id),
    }));
  },
  reorderTasks: (startIndex, endIndex) => {
    set((state) => {
      const result = [...state.tasks];
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);

      return {
        tasks: result,
      };
    });
  },
  setIsDraggingTask: (isDraggingTask) => {
    set((state) => ({
      isDraggingTask: isDraggingTask,
    }));
  },
}));
