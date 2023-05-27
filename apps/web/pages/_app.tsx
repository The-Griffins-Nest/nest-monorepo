import "@styles/globals.css";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import { setColorMode } from "@lib/set_color_mode";
import useThemeStore from "stores/useColorMode";
import { THEME_TYPES } from "@lib/constants";
import ColorModeSwitch from "@shared/ColorModeSwitch";

export default function App({ Component, pageProps }: AppProps) {
  const { THEME_DARK, THEME_LIGHT } = THEME_TYPES;

  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    setColorMode(theme === THEME_DARK ? THEME_DARK : THEME_LIGHT);
  }, [theme]);

  return (
    <div className="bg-white dark:bg-[#101935]">
      <Component {...pageProps} />
      <ColorModeSwitch toggleTheme={toggleTheme} />
    </div>
  );
}
