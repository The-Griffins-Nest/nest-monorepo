import { create } from "zustand";
import { persist } from "zustand/middleware";
import { THEME_TYPES } from "@lib/constants";

const { THEME_LIGHT, THEME_DARK } = THEME_TYPES;

type ColorModeStore = {
  theme: string;
  toggleTheme: () => void;
};

const useColorMode = create(
  persist<ColorModeStore>(
    (set) => ({
      theme: THEME_LIGHT,
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT,
        })),
    }),
    {
      name: "theme",
    }
  )
);

export default useColorMode;
