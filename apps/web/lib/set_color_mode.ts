import { THEME_TYPES } from "@lib/constants";

export const setColorMode = (theme: THEME_TYPES) => {
  const { THEME_DARK, THEME_LIGHT } = THEME_TYPES;
  const root = window.document.documentElement;
  const isDark = theme === THEME_DARK;
  root.classList.remove(isDark ? THEME_LIGHT : THEME_DARK);
  root.classList.add(theme);
};
