import TextArea from "@components/editor/TextArea";
import Title from "@components/editor/Title";
import SocialEmbed from "@components/editor/SocialEmbed";
import Image from "@components/editor/Image";
import { nanoid } from "nanoid";
import { CustomElement, ImageFormData, SetElements, SocialFormData, TextFormData, TitleFormData } from "types/forms";
import { createSetFormData } from "./create_set_form_data";

function ElementFromType(type: string, index: number, setElements: SetElements): CustomElement {
  const id = nanoid();
  switch (type) {
    case "Text":
      const textFormData = new TextFormData("");
      return {
        key: id,
        formData: textFormData,
        element: <TextArea formData={textFormData} setFormData={createSetFormData(index, setElements)} />,
      };
    case "Title":
      const titleFormData = new TitleFormData("");
      return {
        key: id,
        formData: titleFormData,
        element: <Title formData={titleFormData} setFormData={createSetFormData(index, setElements)} />,
      };
    case "Image":
      const imageFormData = new ImageFormData("");
      return {
        key: id,
        formData: imageFormData,
        element: <Image formData={imageFormData} setFormData={createSetFormData(index, setElements)} />,
      };
    case "Social":
      const socialFormData = new SocialFormData("");
      return {
        key: id,
        formData: socialFormData,
        element: <SocialEmbed formData={socialFormData} setFormData={createSetFormData(index, setElements)} />,
      };
    default:
      const formData = new TextFormData("");
      return {
        key: id,
        formData: formData,
        element: <TextArea formData={formData} setFormData={createSetFormData(index, setElements)} />,
      };
  }
}

export default ElementFromType;
