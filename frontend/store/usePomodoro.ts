import create from "zustand";

interface PomodoroState {
  reset: () => void;
  setTimeRemaining: (timeRemaining: number) => void;
  updateTimeRemaining: (phase: 1 | 2 | 3 | 4) => void;
  timeRemaining: number;
  isPlaying: boolean;
  start: () => void;
  stop: () => void;
  phase: 1 | 2 | 3 | 4;
  skipFoward: () => void;
  skipBack: () => void;
  isVisible: boolean;
  hide: () => void;
  show: () => void;
  showDropArea: boolean;
  setShowDropArea: (showDropArea: boolean) => void;
  pomodoroTaskDescription: string;
  setPomodoroTaskDescription: (description: string) => void;
  focusMode: boolean;
  setFocusMode: (focusMode: boolean) => void;
}

export const usePomodoro = create<PomodoroState>((set) => ({
  reset: () => {
    set({
      timeRemaining: 1500000,
      phase: 1,
      isPlaying: false,
      isVisible: false,
      pomodoroTaskDescription: "",
      focusMode: false,
    });
  },
  updateTimeRemaining: (phase: 1 | 2 | 3 | 4) => {
    let newTimeRemaining: 1500000 | 300000 | 900000 = 1500000;

    switch (phase) {
      case 1 || 3:
        newTimeRemaining = 1500000;
        break;
      case 2:
        newTimeRemaining = 300000;
        break;
      case 4:
        newTimeRemaining = 900000;
        break;
    }

    set({
      timeRemaining: newTimeRemaining,
    });
  },
  setTimeRemaining: (timeRemaining) => {
    set((state) => {
      return state.isPlaying ? { timeRemaining: timeRemaining } : {};
    });
  },
  timeRemaining: 1500000,
  isPlaying: false,
  start: () => {
    set((state) => {
      return {
        isPlaying: true,
      };
    });
  },
  stop: () => {
    set((state) => {
      return {
        isPlaying: false,
      };
    });
  },
  phase: 1,
  skipFoward: () => {
    set((state) => {
      const nextPhase = (state.phase + 1 < 5 ? state.phase + 1 : 1) as
        | 1
        | 2
        | 3
        | 4;

      state.updateTimeRemaining(nextPhase);

      return {
        phase: nextPhase,
        isPlaying: false,
      };
    });
  },
  skipBack: () => {
    set((state) => {
      const nextPhase = (state.phase + 1 < 5 ? state.phase + 1 : 1) as
        | 1
        | 2
        | 3
        | 4;

      state.updateTimeRemaining(nextPhase);

      return {
        phase: nextPhase,
        isPlaying: false,
      };
    });
  },
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
  isVisible: false,
  show: () => {
    set({ isVisible: true });
  },
  hide: () => {
    set({ isVisible: false });
  },
  focusMode: false,
  setFocusMode: (focusMode) => {
    set({
      focusMode: focusMode,
    });
  },
}));
