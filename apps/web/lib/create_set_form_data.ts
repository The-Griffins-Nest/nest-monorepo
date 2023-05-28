import { SetElements } from "types/forms";

export function createSetFormData(index: number, setElements: SetElements) {
  return <T>(form_data: T) => {
    setElements((prev) => {
      const new_data = [...prev];
      new_data[index].formData = form_data;
      return new_data;
    });
  };
}
