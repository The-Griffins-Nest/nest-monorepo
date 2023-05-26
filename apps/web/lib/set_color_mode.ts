import { THEME_TYPES } from "@lib/constants";
import { ThemeTypes } from "types/color_mode";

export const setColorMode = (theme: ThemeTypes) => {
  const { THEME_DARK, THEME_LIGHT } = THEME_TYPES;
  const root = window.document.documentElement;
  const isDark = theme === THEME_DARK;
  root.classList.remove(isDark ? THEME_LIGHT : THEME_DARK);
  root.classList.add(theme);
};
