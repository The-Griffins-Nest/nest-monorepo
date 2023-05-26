import React from "react";
import fonts from "@styles/fonts.module.css";

import { useState } from "react";
import { setColorMode } from "@lib/set_color_mode";
import ColorModeSwitch from "@shared/ColorModeSwitch";
import ElementSeparator from "@components/editor/Separator";
import Title from "@components/editor/Title";
import TextArea from "@components/editor/TextArea";

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setColorMode(event.target.checked ? "dark" : "light");
};

function MainPage() {
  const [elements, setElements] = useState([<Title />, <TextArea />]);
  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-row justify-center">
        <div className="w-1/2">
          <ElementSeparator elems={elements} />
        </div>
      </div>
      <div className="fixed bottom-4 left-4">
        <ColorModeSwitch onChange={handleChange} />
      </div>
    </div>
  );
}

export default MainPage;
