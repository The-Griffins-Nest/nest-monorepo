import { IoAddOutline } from "react-icons/io5";
import Button from "@mui/material/Button";
import TextArea from "./TextArea";
import { DARKBACKGROUND } from "@lib/color_styles";
import { CustomElement, SetElements, TitleFormData } from "types/forms";
import { createSetFormData } from "@lib/create_set_form_data";
import React from "react";
import { nanoid } from "nanoid";
import ChooseItemMenu from "./ChooseItemMenu";
import CreateElement from "@lib/create_element";
import useElements from "@stores/useElements";

interface SeparatorProps {
  index: number;
}

function Separator({ index }: SeparatorProps) {
  const createElement = CreateElement();
  const setElements = useElements((state) => state.setElements);

  const handleNew = () => {
    setElements((prev) => {
      const new_data: CustomElement[] = [];
      for (let i = 0; i < prev.length + 1; i++) {
        if (i < index) {
          new_data.push(createElement({ index: i, formElement: prev[i] }));
        } else if (i === index) {
          const id = nanoid();
          const formData = new TitleFormData("");
          new_data.push({
            key: id,
            formData: formData,
            element: <TextArea index={index} />,
          });
        } else {
          new_data.push(createElement({ index: i, formElement: prev[i - 1] }));
        }
      }
      return new_data;
    });
  };

  return (
    <Button variant="text" className="h-4 w-full" onClick={handleNew}>
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
    result.push({
      key: elements[i].key,
      element: (
        <>
          <div className="flex-1">{elements[i].element}</div>
          <div className="group-hover:block group-focus:block hidden transition-all absolute right-0">
            <ChooseItemMenu index={i} type={elements[i].formData.type} setElements={setElements} />
          </div>
        </>
      ),
    });
  }
  result.push({ key: nanoid(), element: <Separator index={elements.length} setElements={setElements} /> });
  return (
    <div className="flex flex-col gap-2">
      {result.map(({ key, element }) => (
        <div className="flex flex-row group relative" key={key}>
          {element}
        </div>
      ))}
    </div>
  );
}

export default ElementSeparator;
