import { AiOutlineExport } from "react-icons/ai";
import fonts from "@styles/fonts.module.css";
import { DARKBACKGROUND } from "@lib/color_styles";

export default function Header() {
  return (
    <div className="flex flex-row px-4">
      <button className={`ml-auto`}>
        <AiOutlineExport className={`inline h-full pb-1 mr-1 text-[#${DARKBACKGROUND}] dark:text-white`} />
        <span className={`${fonts.publico} text-[#${DARKBACKGROUND}] dark:text-white`}>Export</span>
      </button>
    </div>
  );
}
