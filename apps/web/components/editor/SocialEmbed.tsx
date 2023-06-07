import { TextField } from "@mui/material";
import useElements from "@stores/useElements";
import fonts from "@styles/fonts.module.css";
import { useState } from "react";
import { FormProps, SocialFormData } from "types/forms";
import Embed from "react-embed";

export default function SocialEmbed({
  index,
  formData,
}: FormProps<SocialFormData>) {
  const [src, setSrc] = useState(formData.src);
  const setFormData = useElements((state) => state.setFormData);
  return (
    <div className="bg-[#00000000] dark:hover:bg-[#00000024] hover:bg-[#00000008] rounded-lg">
      <TextField
        className={`w-full`}
        id="outlined-basic"
        label="Link"
        variant="outlined"
        value={src}
        onChange={(e) => {
          setSrc(e.target.value);
          setFormData(index, { type: "Social", src: e.target.value });
        }}
      />
      <Embed
        url="https://twitter.com/PixelAndBracket/status/1356633038717923333"
        width={700}
      />
    </div>
  );
}
