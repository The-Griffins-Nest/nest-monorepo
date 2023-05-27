import React, { useEffect } from "react";
import { useState } from "react";
import ElementSeparator from "@components/editor/Separator";
import Title from "@components/editor/Title";
import TextArea from "@components/editor/TextArea";
import { CustomElement, SetElements } from "types/forms";

const createSetFormData = (index: number, setElements: SetElements) => {
  return <T,>(form_data: T) => {
    setElements((prev) => {
      const new_data = [...prev];
      new_data[index].formData = form_data;
      return new_data;
    });
  };
};

function MainPage() {
  const [elements, setElements] = useState<CustomElement[]>([]);
  useEffect(() => {
    setElements([
      {
        formData: "",
        element: <Title key={0} formData="" setFormData={createSetFormData(0, setElements)} />,
      },
      { formData: "", element: <TextArea key={1} formData="" setFormData={createSetFormData(1, setElements)} /> },
    ]);
  }, []);
  return (
    <div className="w-full min-h-screen pt-8">
      <div className="flex flex-row justify-center">
        <div className="w-1/2">
          <ElementSeparator elements={elements} setElements={setElements} />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
