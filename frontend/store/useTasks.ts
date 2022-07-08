import create from "zustand";

import { task } from "../types";
import { api } from "../services/api";

interface TasksState {
  tasks: task[];
  taskBeingEdited: string;
  isTaskBeingEdited: boolean;
  startEditingTask: (taskID: string) => void;
  stopEditingTask: () => void;
  updateTasks: () => Promise<void>;
  addTask: (project?: number) => Promise<void>;
  changeTaskDescription: (
    taskID: string,
    description: string,
    projectId: number | null
  ) => void;
  isDraggingTask: boolean;
  setIsDraggingTask: (isDraggingTask: boolean) => void;
  removeTask: (id: string) => Promise<void>;
  reorderTasks: (startIndex: number, endIndex: number) => void;
}

export const useTasks = create<TasksState>((set) => ({
  tasks: [],
  taskBeingEdited: "",
  isTaskBeingEdited: false,
  startEditingTask: (taskID) => {
    set({ taskBeingEdited: taskID, isTaskBeingEdited: true });
  },
  stopEditingTask: () => {
    set(() => {
      return { taskBeingEdited: "", isTaskBeingEdited: false };
    });
  },
  updateTasks: async () => {
    set({ tasks: (await (await api.get("/tasks")).data.tasks) as task[] });
  },
  isDraggingTask: false,
  addTask: async (project) => {
    await api.post("/tasks", {
      projectId: project ? project : null,
      description: "",
    });

    const updatedTasks = (await (await api.get("/tasks")).data.tasks) as task[];

    set({
      tasks: updatedTasks,
      taskBeingEdited: updatedTasks.find((t) => t.description === "")
        ?.description,
    });
  },
  changeTaskDescription: async (taskID, description) => {
    set((state) => {
      const tasks = [
        ...state.tasks.map((t) =>
          t.id === taskID ? { ...t, description: description } : t
        ),
      ];
      return {
        tasks: tasks,
      };
    });

    await api.put(`/tasks/${taskID}`, {
      description: description,
    });
  },
  setIsDraggingTask: (isDraggingTask) => {
    set({
      isDraggingTask: isDraggingTask,
    });
  },
  removeTask: async (id) => {
    await api.delete(`/tasks/${id}`);
    set((state) => ({
      tasks: state.tasks.filter((todo: any) => todo.id !== id),
    }));
  },
  reorderTasks: async (startIndex, endIndex) => {
    set((state) => {
      const result = [...state.tasks];
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);

      api.post("/tasks/reorder", {
        tasks: result,
      });

      return {
        tasks: result,
      };
    });
  },
}));
