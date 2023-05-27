export type FormProps<T> = {
  formData: T;
  setFormData: (data: T) => void;
  key: number;
};
