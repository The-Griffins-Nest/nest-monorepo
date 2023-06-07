import React, { useEffect } from "react";
import ElementSeparator from "@components/editor/Separator";
import { TextFormData, TitleFormData } from "types/forms";
import { nanoid } from "nanoid";
import Header from "@components/editor/Header";
import useElements from "@stores/useElements";

function MainPage() {
  const setElements = useElements((state) => state.setElements);
  useEffect(() => {
    setElements([
      {
        key: nanoid(),
        formData: new TitleFormData(""),
      },
      {
        key: nanoid(),
        formData: new TextFormData(""),
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
