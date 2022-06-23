import create from "zustand";

import { task } from "../types";
import { api } from "../services/api";

interface TasksState {
  tasks: task[];
  updateTasks: () => Promise<void>;
  addTask: (project?: string) => void;
  isDraggingTask: boolean;
  setIsDraggingTask: (isDraggingTask: boolean) => void;
  removeTask: (id: string) => Promise<void>;
  reorderTasks: (startIndex: number, endIndex: number) => void;
}

export const useTasks = create<TasksState>((set) => ({
  tasks: [],
  updateTasks: async () => {
    set({ tasks: (await (await api.get("/tasks")).data.tasks) as task[] });
  },
  isDraggingTask: false,
  addTask: async (project) => {
    const tasks = (await (await api.get("/tasks")).data.tasks) as task[];

    let index: number;
    index = Math.max(
      ...tasks.map((t) => parseInt(project ? t.projectIndex : t.inboxIndex))
    );

    await api.post("/tasks", {
      projectId: project ? project : "",
      description: "",
      inboxIndex: project ? index.toString() : 0,
      projectIndex: project ? index.toString() : 0,
    });

    set({ tasks: (await (await api.get("/tasks")).data.tasks) as task[] });
  },
  setIsDraggingTask: (isDraggingTask) => {
    set((state) => ({
      isDraggingTask: isDraggingTask,
    }));
  },
  removeTask: async (id) => {
    await api.delete(`/tasks/${id}`);
    set((state) => ({
      tasks: state.tasks.filter((todo: any) => todo.id !== id),
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
