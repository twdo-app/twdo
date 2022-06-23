import create from "zustand";
import { v4 as uuid } from "uuid";

import { task } from "../types";

interface TasksState {
  tasks: task[];
  addTask: (description: string) => void;
  isDraggingTask: boolean;
  setIsDraggingTask: (isDraggingTask: boolean) => void;
  removeTask: (id: string) => void;
  reorderTasks: (startIndex: number, endIndex: number) => void;
}

export const useTasks = create<TasksState>((set) => ({
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
      description: "task3",
    },
  ],
  isDraggingTask: false,
  addTask: (description) => {
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
  setIsDraggingTask: (isDraggingTask) => {
    set((state) => ({
      isDraggingTask: isDraggingTask,
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
}));
