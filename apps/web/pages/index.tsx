import React from "react";
import fonts from "@styles/fonts.module.css";
import { IoAddOutline } from "react-icons/io5";
import Button from "@mui/material/Button";
import { useState } from "react";
import { setColorMode } from "@lib/set_color_mode";
import ColorModeSwitch from "@shared/ColorModeSwitch";

function Title() {
  return (
    <div className="bg-[#00000000] dark:hover:bg-[#00000024] hover:bg-[#00000008] p-2 rounded-lg">
      <input
        className={`${fonts.cheltenham} w-full outline-none border-none text-4xl
      bg-[#00000000] dark:text-white text-[#101935] font-[500] tracking-[-2px] leading-[8px]`}
      ></input>
    </div>
  );
}

interface SeparatorProps {
  index: number;
}

function Separator({ index }: SeparatorProps) {
  return (
    <Button
      variant="text"
      className="h-4 w-full"
      onClick={() => {
        console.log(index);
      }}
    >
      <IoAddOutline />
    </Button>
  );
}

function ElementSeparator({ elems }: { elems: React.ReactNode[] }) {
  const result = [];
  for (let i = 0; i < elems.length; i++) {
    result.push(elems[i]);
    if (i !== elems.length - 1) {
      result.push(
        <div key={i}>
          <Separator index={i} />
        </div>
      );
    }
  }
  return <>{result}</>;
}

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setColorMode(event.target.checked ? "dark" : "light");
};

function MainPage() {
  const [elements, setElements] = useState([<Title />]);
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
