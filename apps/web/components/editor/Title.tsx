import TextareaAutosize from "@mui/material/TextareaAutosize";
import fonts from "@styles/fonts.module.css";
import { ChangeEvent } from "react";
import { FormProps, TitleFormData } from "types/forms";

function Title({ formData, setFormData }: FormProps<TitleFormData>) {
  return (
    <div className="bg-[#00000000] dark:hover:bg-[#00000024] hover:bg-[#00000008] rounded-lg">
      <TextareaAutosize
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
          setFormData({ type: "Title", text: event.target.value });
        }}
        aria-label="title"
        minRows={1}
        placeholder="Title"
        className={`${fonts.cheltenham} w-full outline-none border-none text-4xl resize-none
        bg-[#00000000] dark:text-white text-[#101935] font-[500] tracking-[-2px] m-2`}
      />
    </div>
  );
}

export default Title;
