import create from "zustand";

interface PomodoroState {
  showDropArea: boolean;
  setShowDropArea: (showDropArea: boolean) => void;
  pomodoroTaskDescription: string;
  setPomodoroTaskDescription: (description: string) => void;
}

export const usePomodoro = create<PomodoroState>((set) => ({
  pomodoroTaskDescription: "",
  showDropArea: false,
  setPomodoroTaskDescription: (description) => {
    set((state) => ({
      pomodoroTaskDescription: description,
    }));
  },
  setShowDropArea: (showDropArea) => {
    set((state) => ({
      showDropArea: showDropArea,
    }));
  },
}));
