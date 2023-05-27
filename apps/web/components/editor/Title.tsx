import fonts from "@styles/fonts.module.css";
import { FormProps } from "types/forms";

function Title({ formData, setFormData, key }: FormProps<string>) {
  return (
    <div className="bg-[#00000000] dark:hover:bg-[#00000024] hover:bg-[#00000008] p-2 rounded-lg">
      <input
        placeholder="Title"
        className={`${fonts.cheltenham} w-full outline-none border-none text-4xl
      bg-[#00000000] dark:text-white text-[#101935] font-[500] tracking-[-2px] leading-[8px]`}
      ></input>
    </div>
  );
}

export default Title;
