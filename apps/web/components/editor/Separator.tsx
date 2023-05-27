import { IoAddOutline } from "react-icons/io5";
import Button from "@mui/material/Button";
import TextArea from "./TextArea";
import { DARKBACKGROUND } from "@lib/color_styles";

type setElementsType = React.Dispatch<React.SetStateAction<JSX.Element[]>>;

interface SeparatorProps {
  index: number;
  setElements: setElementsType;
}

function Separator({ index, setElements }: SeparatorProps) {
  return (
    <Button
      variant="text"
      className="h-4 w-full"
      onClick={() => {
        console.log("index", index);
        setElements((prev) => {
          const result = [];
          for (let i = 0; i < prev.length + 1; i++) {
            if (i === index) {
              //   result.push(<TextArea key={i} />);
              result.push(
                <div key={i}>
                  <div>Hello</div>
                  {/* <TextArea></TextArea> */}
                </div>
              );
            } else {
              if (i < index) {
                result.push(prev[i]);
              }
              if (i > index) {
                result.push(prev[i - 1]);
              }
            }
          }
          return result;
        });
      }}
    >
      <IoAddOutline className={`text-[${DARKBACKGROUND}] dark:text-[#FFFFFF]`} />
    </Button>
  );
}

type ElementSeparatorProps = {
  elements: React.ReactNode[];
  setElements: setElementsType;
};

function ElementSeparator({ elements, setElements }: ElementSeparatorProps) {
  const result = [];
  for (let i = 0; i < elements.length; i++) {
    result.push(
      <div id={`separator-${i}`} key={`separator-${i}`}>
        <Separator index={i} setElements={setElements} />
      </div>
    );
    result.push(
      <div id={`element-${i}`} key={`element-${i}`}>
        {elements[i]}
      </div>
    );
  }
  result.push(
    <div id={`separator-${elements.length}`} key={`separator-${elements.length}`}>
      <Separator index={elements.length} setElements={setElements} />
    </div>
  );
  return <div className="flex flex-col gap-2">{result}</div>;
}

export default ElementSeparator;
