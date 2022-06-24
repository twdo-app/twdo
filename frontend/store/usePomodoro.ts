import create from "zustand";

interface PomodoroState {
  timeRemaining: number;
  isPlaying: boolean;
  start: () => void;
  stop: () => void;
  isVisible: boolean;
  hide: () => void;
  show: () => void;
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
