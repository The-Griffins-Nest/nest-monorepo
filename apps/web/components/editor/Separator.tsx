import { IoAddOutline } from "react-icons/io5";
import Button from "@mui/material/Button";
import { DARKBACKGROUND } from "@lib/color_styles";
import React from "react";
import { nanoid } from "nanoid";
import ChooseItemMenu from "./ChooseItemMenu";
import useElements from "@stores/useElements";

interface SeparatorProps {
  index: number;
}

function Separator({ index }: SeparatorProps) {
  const insertElement = useElements((state) => state.insertElement);

  const handleNew = () => {
    insertElement(index);
  };

  return (
    <Button variant="text" className="h-4 w-full" onClick={handleNew}>
      <IoAddOutline
        className={`text-[${DARKBACKGROUND}] dark:text-[#FFFFFF]`}
      />
    </Button>
  );
}

function ElementSeparator() {
  const elements = useElements((state) => state.elements);
  const result = [];
  for (let i = 0; i < elements.length; i++) {
    result.push({ key: nanoid(), element: <Separator index={i} /> });
    result.push({
      key: elements[i].key,
      element: (
        <>
          <div className="flex-1">{elements[i].element}</div>
          <div className="group-hover:block group-focus:block hidden transition-all absolute right-0">
            <ChooseItemMenu index={i} type={elements[i].formData.type} />
          </div>
        </>
      ),
    });
  }
  result.push({
    key: nanoid(),
    element: <Separator index={elements.length} />,
  });
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
