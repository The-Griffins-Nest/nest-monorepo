import { create } from "zustand";
import { CustomElement, TextFormData } from "types/forms";
import { DataFromType } from "@lib/data_from_type";
import { nanoid } from "nanoid";
import { persist } from "zustand/middleware";

type ElementStore = {
  elements: CustomElement[];
  insertElement: (index: number) => void;
  replaceElement: (index: number, type: string) => void;
  setElements: (elements: CustomElement[]) => void;
  setFormData: (index: number, form_data: any) => void;
};

const useElements = create(
  persist<ElementStore>(
    (set) => ({
      elements: [],
      insertElement: (index) =>
        set(({ elements }) => {
          const new_data: CustomElement[] = [];
          for (let i = 0; i < elements.length + 1; i++) {
            if (i < index) {
              const { key, formData } = elements[i];
              new_data.push({ key, formData });
            } else if (i === index) {
              const key = nanoid();
              new_data.push({
                key,
                formData: new TextFormData(""),
              });
            } else {
              const { key, formData } = elements[i - 1];
              new_data.push({ key, formData });
            }
          }
          return { elements: new_data };
        }),
      replaceElement: (index, type) =>
        set(({ elements }) => {
          const newElem = DataFromType(type);
          const new_data = [...elements];
          new_data[index] = newElem;
          return { elements: new_data };
        }),
      setElements: (elements) => set({ elements }),
      setFormData: (index, form_data) =>
        set((state) => {
          const new_data = [...state.elements];
          if (typeof new_data[index] === typeof form_data) {
            new_data[index].formData = form_data;
          }
          return { elements: new_data };
        }),
    }),
    {
      name: "elements",
    }
  )
);

export default useElements;
