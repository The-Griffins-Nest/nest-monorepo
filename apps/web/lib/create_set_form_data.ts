import { SetElements, FormData } from "types/forms";

export function createSetFormData(index: number, setElements: SetElements) {
  return (form_data: FormData) => {
    setElements((prev) => {
      const new_data = [...prev];
      if (typeof new_data[index] === typeof form_data) {
        new_data[index].formData = form_data;
      }
      return new_data;
    });
  };
}