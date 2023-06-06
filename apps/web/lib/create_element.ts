import React from "react";
import { CustomElement } from "types/forms";
import { createSetFormData } from "./create_set_form_data";
import ElementFromType from "./element_from_type";

type CreateElementProps = {
  index: number;
  type?: string;
  formElement?: CustomElement;
};

export default function CreateElement() {
  return ({ index, type, formElement }: CreateElementProps): CustomElement => {
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
        setFormData: createSetFormData(index),
      }),
    };
  };
}
