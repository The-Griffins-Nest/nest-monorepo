import React, { useEffect } from "react";
import { useState } from "react";
import ElementSeparator from "@components/editor/Separator";
import Title from "@components/editor/Title";
import TextArea from "@components/editor/TextArea";
import { CustomElement } from "types/forms";
import { nanoid } from "nanoid";
import { createSetFormData } from "@lib/create_set_form_data";

function MainPage() {
  const [elements, setElements] = useState<CustomElement[]>([]);

  useEffect(() => {
    setElements([
      {
        key: nanoid(),
        formData: {
          text: "",
        },
        element: (
          <Title
            formData={{
              text: "",
            }}
            setFormData={createSetFormData(0, setElements)}
          />
        ),
      },
      {
        key: nanoid(),
        formData: {
          text: "",
        },
        element: <TextArea formData={{ text: "" }} setFormData={createSetFormData(1, setElements)} />,
      },
    ]);
  }, []);

  return (
    <div className="w-full min-h-screen pt-8">
      <div className="flex flex-row justify-center px-8 md:px-0">
        <div className="w-full md:w-1/2">
          <ElementSeparator elements={elements} setElements={setElements} />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
