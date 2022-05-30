import create from "zustand";
import { v4 as uuid } from "uuid";

import { task } from "../types";

interface TasksState {
  tasks: task[];
  addTask: (description: string) => void;
  removeTask: (id: string) => void;
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
}));
