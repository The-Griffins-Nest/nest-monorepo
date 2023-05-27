import { TextareaAutosize } from "@mui/material";
import fonts from "@styles/fonts.module.css";
import React, { ChangeEvent, useEffect, useRef } from "react";
import { FormProps } from "types/forms";

function TextArea({ formData, setFormData, key }: FormProps<string>) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.innerText = formData;
    }
  }, []);

  return (
    <div key={key} className="bg-[#00000000] dark:hover:bg-[#00000024] hover:bg-[#00000008] rounded-lg">
      {/* <input
        placeholder="Some Text"
        className={`${fonts.publico} w-full h-full outline-none border-none text-lg m-2
      bg-[#00000000] dark:text-white text-[#101935] font-[500]`}
      ></input> */}
      <TextareaAutosize
        ref={textAreaRef}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
          setFormData(event.target.value);
        }}
        aria-label="text area"
        minRows={3}
        placeholder="Some text here!"
        className={`${fonts.publico} w-full h-full outline-none border-none text-lg m-2  bg-[#00000000] dark:text-white text-[#101935] font-[500] resize-none`}
      />
    </div>
  );
}
export default TextArea;
