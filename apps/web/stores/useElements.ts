import { CustomElement } from "types/forms";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type ElementStore = {
  elements: CustomElement[];
  setElements: (elements: CustomElement[]) => void;
  setFormData: (index: number, form_data: any) => void;
};

const useElements = create(
  persist<ElementStore>(
    (set) => ({
      elements: [],
      // setElements should take a function that takes the current state and returns the new state
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
