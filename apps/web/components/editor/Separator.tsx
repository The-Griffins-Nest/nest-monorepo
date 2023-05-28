import { IoAddOutline } from "react-icons/io5";
import Button from "@mui/material/Button";
import TextArea from "./TextArea";
import { DARKBACKGROUND } from "@lib/color_styles";
import { CustomElement, SetElements } from "types/forms";
import { createSetFormData } from "@lib/create_set_form_data";
import React from "react";
import { nanoid } from "nanoid";

interface SeparatorProps {
  index: number;
  setElements: SetElements;
}

const CreateElement =
  (setElements: SetElements) =>
  (formElement: CustomElement, index: number): CustomElement => {
    const { key, formData, element } = formElement;
    console.log("creating element", index, formData, element);
    return {
      key,
      formData,
      element: React.createElement(element.type, {
        index: index,
        formData,
        setFormData: createSetFormData(index, setElements),
      }),
    };
  };

function Separator({ index, setElements }: SeparatorProps) {
  const createElement = CreateElement(setElements);
  return (
    <Button
      variant="text"
      className="h-4 w-full"
      onClick={() => {
        console.log("index", index);
        setElements((prev) => {
          const new_data: CustomElement[] = [];
          for (let i = 0; i < prev.length + 1; i++) {
            if (i < index) {
              new_data.push(createElement(prev[i], i));
            } else if (i === index) {
              const id = nanoid();
              new_data.push({
                key: id,
                formData: "",
                element: <TextArea formData="" setFormData={createSetFormData(i, setElements)} />,
              });
            } else {
              new_data.push(createElement(prev[i - 1], i));
            }
          }
          return new_data;
        });
      }}
    >
      <IoAddOutline className={`text-[${DARKBACKGROUND}] dark:text-[#FFFFFF]`} />
    </Button>
  );
}

type ElementSeparatorProps = {
  elements: CustomElement[];
  setElements: SetElements;
};

function ElementSeparator({ elements, setElements }: ElementSeparatorProps) {
  const result = [];
  for (let i = 0; i < elements.length; i++) {
    result.push({ key: nanoid(), element: <Separator index={i} setElements={setElements} /> });
    result.push({ key: elements[i].key, element: elements[i].element });
  }
  result.push({ key: nanoid(), element: <Separator index={elements.length} setElements={setElements} /> });
  return (
    <div className="flex flex-col gap-2">
      {result.map(({ key, element }) => (
        <div key={key}>{element}</div>
      ))}
    </div>
  );
}

export default ElementSeparator;
