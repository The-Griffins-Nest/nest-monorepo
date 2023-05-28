import { TextareaAutosize } from "@mui/material";
import fonts from "@styles/fonts.module.css";
import React, { ChangeEvent, useEffect, useRef } from "react";
import { FormProps } from "types/forms";

function TextArea({ formData, setFormData }: FormProps<string>) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="bg-[#00000000] dark:hover:bg-[#00000024] hover:bg-[#00000008] rounded-lg">
      <TextareaAutosize
        ref={textAreaRef}
        defaultValue={formData}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
          setFormData(event.target.value);
        }}
        aria-label="text area"
        minRows={3}
        placeholder="Some text here!"
        className={`${fonts.publico} w-full h-full outline-none border-none text-lg m-2 bg-[#00000000] dark:text-white text-[#101935] font-[500] resize-none`}
      />
    </div>
  );
}
export default TextArea;
