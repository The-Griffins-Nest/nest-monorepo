import React, { useEffect } from "react";
import { useState } from "react";
import { setColorMode } from "@lib/set_color_mode";
import ColorModeSwitch from "@shared/ColorModeSwitch";
import ElementSeparator from "@components/editor/Separator";
import Title from "@components/editor/Title";
import TextArea from "@components/editor/TextArea";
import useThemeStore from "stores/useColorMode";
import { THEME_TYPES } from "@lib/constants";

const createSetFormData = (index: number, setData: React.Dispatch<React.SetStateAction<any[]>>) => {
  return <T,>(form_data: T) => {
    setData((prev) => {
      const result = [];
      for (let i = 0; i < prev.length + 1; i++) {
        if (i === index) result.push(form_data);
        if (i < index) result.push(prev[i]);
        if (i > index) result.push(prev[i - 1]);
      }
      return result;
    });
  };
};

function MainPage() {
  const [data, setData] = useState<any[]>([]);
  const [elements, setElements] = useState([
    <Title key={0} formData="" setFormData={createSetFormData(0, setData)} />,
    <TextArea key={1} formData="" setFormData={createSetFormData(1, setData)} />,
  ]);

  const { THEME_DARK, THEME_LIGHT } = THEME_TYPES;
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    setColorMode(theme === THEME_DARK ? THEME_DARK : THEME_LIGHT);
  }, [theme]);

  return (
    <div className="w-full min-h-screen pt-8">
      <div className="flex flex-row justify-center">
        <div className="w-1/2">
          {JSON.stringify(data)}
          <ElementSeparator elements={elements} setElements={setElements} />
        </div>
      </div>
      <ColorModeSwitch toggleTheme={toggleTheme} />
    </div>
  );
}

export default MainPage;
