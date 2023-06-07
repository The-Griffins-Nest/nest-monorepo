import React from "react";
import { CustomElement } from "types/forms";
import ElementFromType from "./element_from_type";

type CreateElementProps = {
  index: number;
  type?: string;
  formElement?: CustomElement;
};

export default function CreateElement({
  index,
  type,
  formElement,
}: CreateElementProps): CustomElement {
  console.log("CreateElement", { index, type, formElement });
  let actualElement;
  if (formElement) {
    actualElement = formElement;
  } else if (type) {
    actualElement = ElementFromType(type, index);
  }
  if (!actualElement) throw new Error("Form Element or Type is required");
  const { key, formData, element } = actualElement;

  return {
    key,
    formData,
    element: React.createElement(element.type, {
      index: index,
      formData,
    }),
  };
}
