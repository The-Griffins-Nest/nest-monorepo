import React, { useEffect } from "react";
import { useState } from "react";
import ElementSeparator from "@components/editor/Separator";
import Title from "@components/editor/Title";
import TextArea from "@components/editor/TextArea";
import { TextFormData, TitleFormData } from "types/forms";
import { nanoid } from "nanoid";
import Header from "@components/editor/Header";
import useElements from "@stores/useElements";

function MainPage() {
  const { setElements } = useElements((state) => ({
    setElements: state.setElements,
  }));

  useEffect(() => {
    const title = new TitleFormData("");
    setElements([
      {
        key: nanoid(),
        formData: title,
        element: <Title index={0} formData={title} />,
      },
      {
        key: nanoid(),
        formData: new TextFormData(""),
        element: <TextArea index={1} />,
      },
    ]);
  }, []);

  return (
    <div className="w-full min-h-screen pt-8">
      <Header></Header>
      <div className="flex flex-row justify-center px-8 md:px-0">
        <div className="w-full md:w-1/2">
          <ElementSeparator />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
