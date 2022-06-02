export type ThemeOptions = "light" | "dark";

export interface Theme {
  theme: ThemeOptions;
  setTheme: (theme: ThemeOptions) => void;
}
