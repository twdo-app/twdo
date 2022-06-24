import create from "zustand";

interface DimScreenState {
  isDimScreenVisible: boolean;
  enableDimScreen: () => void;
  disableDimScreen: () => void;
}

export const useDimScreen = create<DimScreenState>((set) => ({
  isDimScreenVisible: false,
  enableDimScreen: () => {
    set((state) => ({
      isDimScreenVisible: true,
    }));
  },
  disableDimScreen: () => {
    set((state) => ({
      isDimScreenVisible: false,
    }));
  },
}));
