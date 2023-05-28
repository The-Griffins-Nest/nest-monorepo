export type FormProps<T> = {
  formData: T;
  setFormData: (data: T) => void;
};

export type TextFormData = {
  text: string;
};

export type TitleFormData = {
  text: string;
};

export type ImageFormData = {
  src: string;
  alt?: string;
};

export type FormData = TextFormData | TitleFormData | ImageFormData;

export type CustomElement = { key: string; formData: FormData; element: JSX.Element };
export type SetElements = React.Dispatch<React.SetStateAction<CustomElement[]>>;
