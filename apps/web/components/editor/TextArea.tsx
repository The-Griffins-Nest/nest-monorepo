import fonts from "@styles/fonts.module.css";

function TextArea() {
  return (
    <div className="bg-[#00000000] dark:hover:bg-[#00000024] hover:bg-[#00000008] rounded-lg">
      <input
        placeholder="Article"
        className={`${fonts.publico} w-full h-full outline-none border-none text-xl m-2
      bg-[#00000000] dark:text-white text-[#101935] font-[500]`}
      ></input>
    </div>
  );
}
export default TextArea;
