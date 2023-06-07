import { nanoid } from "nanoid";
import {
  CustomElement,
  ImageFormData,
  SocialFormData,
  TextFormData,
  TitleFormData,
} from "types/forms";

function FormDataFromType(type: string) {
  switch (type) {
    case "Text":
      return new TextFormData("");
    case "Title":
      return new TitleFormData("");
    case "Image":
      return new ImageFormData("");
    case "Social":
      return new SocialFormData("");
    default:
      return new TextFormData("");
  }
}

function DataFromType(type: string): CustomElement {
  const id = nanoid();
  return {
    key: id,
    formData: FormDataFromType(type),
  };
}

export { DataFromType };
