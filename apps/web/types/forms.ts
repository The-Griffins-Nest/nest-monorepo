export type FormProps<T> = {
  formData: T;
  setFormData: (data: T) => void;
};

export type CustomElement = { key: string; formData: any; element: JSX.Element };
export type SetElements = React.Dispatch<React.SetStateAction<CustomElement[]>>;
