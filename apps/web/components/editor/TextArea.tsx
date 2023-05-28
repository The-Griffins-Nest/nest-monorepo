import { TextareaAutosize } from "@mui/material";
import fonts from "@styles/fonts.module.css";
import React, { ChangeEvent } from "react";
import { FormProps, TextFormData } from "types/forms";
import MUIRichTextEditor from "mui-rte";

function TextArea({ formData, setFormData }: FormProps<TextFormData>) {
  return (
    <div className="bg-[#00000000] dark:hover:bg-[#00000024] hover:bg-[#00000008] rounded-lg">
      {/* <TextareaAutosize
        defaultValue={formData.text}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
          setFormData({ type: "Text", text: event.target.value });
        }}
        aria-label="text area"
        minRows={3}
        placeholder="Some text here!"
        className={`${fonts.publico} w-full h-full outline-none border-none text-lg m-2 bg-[#00000000] dark:text-white text-[#101935] font-[500] resize-none`}
      /> */}
      <MUIRichTextEditor label="Start typing..." />
    </div>
  );
}
export default TextArea;
