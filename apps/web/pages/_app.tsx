import "@styles/globals.css";
import type { AppProps } from "next/app";
import React, { useState, useEffect } from "react";
import { setColorMode } from "@lib/set_color_mode";
import useThemeStore from "stores/useColorMode";
import useColorMode from "@stores/useColorMode";
import { THEME_TYPES } from "@lib/constants";

function ColorModeSwitch({ toggleTheme }: { toggleTheme: () => void }) {
  const theme = useColorMode((state) => state.theme);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [theme]);

  return loaded ? (
    <div className="fixed bottom-4 left-4">
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" onChange={toggleTheme} checked={theme === "dark"} />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Switch to {theme === "dark" ? "light" : "dark"} mode
        </span>
      </label>
    </div>
  ) : null;
}

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
