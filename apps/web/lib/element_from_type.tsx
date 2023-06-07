import { ImageFormData, SocialFormData, TitleFormData } from "types/forms";
import Image from "@components/editor/Image";
import SocialEmbed from "@components/editor/SocialEmbed";
import TextArea from "@components/editor/TextArea";
import Title from "@components/editor/Title";

function ElementFromType(type: string, index: number): JSX.Element {
  switch (type) {
    case "Text":
      return <TextArea index={index} />;
    case "Title":
      const titleFormData = new TitleFormData("");
      return <Title index={index} formData={titleFormData} />;
    case "Image":
      const imageFormData = new ImageFormData("");
      return <Image index={index} formData={imageFormData} />;
    case "Social":
      const socialFormData = new SocialFormData("");
      return <SocialEmbed index={index} formData={socialFormData} />;
    default:
      return <TextArea index={index} />;
  }
}

export { ElementFromType };
