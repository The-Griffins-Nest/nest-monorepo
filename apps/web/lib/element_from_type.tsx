import Image from "@components/editor/Image";
import SocialEmbed from "@components/editor/SocialEmbed";
import TextArea from "@components/editor/TextArea";
import Title from "@components/editor/Title";

function ElementFromType(type: string, index: number): JSX.Element {
  switch (type) {
    case "Text":
      return <TextArea index={index} />;
    case "Title":
      return <Title index={index} />;
    case "Image":
      return <Image index={index} />;
    case "Social":
      return <SocialEmbed index={index} />;
    default:
      return <TextArea index={index} />;
  }
}

export { ElementFromType };
