import useElements from "@stores/useElements";
import { FormData } from "types/forms";

export function createSetFormData(index: number) {
  const setFormData = useElements((state) => state.setFormData);
  return (form_data: FormData) => {
    setFormData(index, form_data);
  };
}