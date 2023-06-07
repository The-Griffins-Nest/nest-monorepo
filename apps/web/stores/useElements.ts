import { CustomElement } from "types/forms";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import CreateElement from "@lib/create_element";

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
          console.log(elements);
          const new_data: CustomElement[] = [];
          for (let i = 0; i < elements.length + 1; i++) {
            if (i < index) {
              new_data.push(
                CreateElement({ index: i, formElement: elements[i] })
              );
            } else if (i === index) {
              new_data.push(CreateElement({ index: i, type: "Text" }));
            } else {
              new_data.push(
                CreateElement({ index: i, formElement: elements[i - 1] })
              );
            }
          }
          return { elements: new_data };
        }),
      replaceElement: (index, type) =>
        set(({ elements }) => {
          const newElem = CreateElement({ index, type });
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
