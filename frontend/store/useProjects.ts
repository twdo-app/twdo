import create from "zustand";
import { api } from "../services/api";
import { project } from "../types";

interface ProjectsState {
  projects: project[];
  loadProjects: () => Promise<void>;
  addProject: (emoji: string, name: string) => Promise<void>;
  removeProject: (id: number) => Promise<void>;
}

export const useProjects = create<ProjectsState>((set) => ({
  projects: [],
  loadProjects: async () => {
    set({
      projects: (await (await api.get("/projects")).data.projects) as project[],
    });
  },
  addProject: async (emoji, name) => {
    await api.post("/projects", {
      name: name,
      emoji: emoji,
    });

    set({
      projects: (await (await api.get("/projects")).data.projects) as project[],
    });
  },
  removeProject: async (id) => {
    await api.delete(`/projects/${id}`);

    set({
      projects: (await (await api.get("/projects")).data.projects) as project[],
    });
  },
}));
