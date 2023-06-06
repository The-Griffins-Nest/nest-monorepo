import TextareaAutosize from "@mui/material/TextareaAutosize";
import useElements from "@stores/useElements";
import fonts from "@styles/fonts.module.css";
import { ChangeEvent } from "react";
import { FormProps, TitleFormData } from "types/forms";

function Title({ index, formData }: FormProps<TitleFormData>) {
  const setFormData = useElements((state) => state.setFormData);
  return (
    <div className="bg-[#00000000] dark:hover:bg-[#00000024] hover:bg-[#00000008] rounded-lg">
      <TextareaAutosize
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
          setFormData(index, { type: "Title", text: event.target.value });
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
