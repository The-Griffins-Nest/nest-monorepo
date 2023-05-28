import React from "react";
import { SetElements, CustomElement } from "types/forms";
import { createSetFormData } from "./create_set_form_data";
import ElementFromType from "./element_from_type";

type CreateElementProps = {
  index: number;
  type?: string;
  formElement?: CustomElement;
};

export default function CreateElement(setElements: SetElements) {
  return ({ index, type, formElement }: CreateElementProps): CustomElement => {
    let actualElement;
    if (formElement) {
      actualElement = formElement;
    } else if (type) {
      actualElement = ElementFromType(type, index, setElements);
    }
    if (!actualElement) throw new Error("Form Element or Type is required");
    const { key, formData, element } = actualElement;

    return {
      key,
      formData,
      element: React.createElement(element.type, {
        index: index,
        formData,
        setFormData: createSetFormData(index, setElements),
      }),
    };
  };
}
