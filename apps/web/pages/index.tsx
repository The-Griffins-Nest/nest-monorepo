import React, { useEffect } from "react";
import { useState } from "react";
import { setColorMode } from "@lib/set_color_mode";
import ColorModeSwitch from "@shared/ColorModeSwitch";
import ElementSeparator from "@components/editor/Separator";
import Title from "@components/editor/Title";
import TextArea from "@components/editor/TextArea";

const createSetFormData = (index: number, setData: React.Dispatch<React.SetStateAction<any[]>>) => {
  return <T,>(form_data: T) => {
    setData((prev) => {
      const new_data = [...prev];
      new_data[index] = form_data;
      return new_data;
    });
  };
};

function MainPage() {
  const [data, setData] = useState<any[]>([]);
  const [elements, setElements] = useState([
    <Title key={0} formData="" setFormData={createSetFormData(0, setData)} />,
    <TextArea key={1} formData="" setFormData={createSetFormData(1, setData)} />,
  ]);

  return (
    <div className="w-full min-h-screen pt-8">
      <div className="flex flex-row justify-center">
        <div className="w-1/2">
          {JSON.stringify(data)}
          <ElementSeparator elements={elements} setElements={setElements} />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
