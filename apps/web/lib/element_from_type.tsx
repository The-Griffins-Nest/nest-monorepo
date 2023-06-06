import TextArea from "@components/editor/TextArea";
import Title from "@components/editor/Title";
import SocialEmbed from "@components/editor/SocialEmbed";
import Image from "@components/editor/Image";
import { nanoid } from "nanoid";
import { CustomElement, ImageFormData,  SocialFormData, TextFormData, TitleFormData } from "types/forms";

function ElementFromType(type: string, index: number): CustomElement {
  const id = nanoid();
  switch (type) {
    case "Text":
      const textFormData = new TextFormData("");
      return {
        key: id,
        formData: textFormData,
        element: <TextArea index={index}/>,
      };
    case "Title":
      const titleFormData = new TitleFormData("");
      return {
        key: id,
        formData: titleFormData,
        element: <Title index={index} formData={titleFormData} />,
      };
    case "Image":
      const imageFormData = new ImageFormData("");
      return {
        key: id,
        formData: imageFormData,
        element: <Image index={index} formData={imageFormData} />,
      };
    case "Social":
      const socialFormData = new SocialFormData("");
      return {
        key: id,
        formData: socialFormData,
        element: <SocialEmbed index={index} formData={socialFormData} />,
      };
    default:
      const formData = new TextFormData("");
      return {
        key: id,
        formData: formData,
        element: <TextArea index={index} />,
      };
  }
}

export default ElementFromType;
