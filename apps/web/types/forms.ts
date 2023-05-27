export type FormProps<T> = {
  formData: T;
  setFormData: (data: T) => void;
  key: number;
};

export type CustomElement = { formData: any; element: JSX.Element };
export type SetElements = React.Dispatch<React.SetStateAction<CustomElement[]>>;
