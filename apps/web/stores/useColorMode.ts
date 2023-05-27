import { create } from "zustand";
import { persist } from "zustand/middleware";
import { THEME_TYPES } from "@lib/constants";
import { setColorMode } from "@lib/set_color_mode";

const { THEME_LIGHT, THEME_DARK } = THEME_TYPES;

type ColorModeStore = {
  theme: string | null;
  toggleTheme: () => void;
};

const useColorMode = create(
  persist<ColorModeStore>(
    (set) => ({
      theme: null,
      toggleTheme: () => {
        set((state) => {
          const new_theme = state.theme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
          setColorMode(new_theme);
          return { theme: new_theme };
        });
      },
    }),
    {
      name: "theme",
    }
  )
);

export default useColorMode;
