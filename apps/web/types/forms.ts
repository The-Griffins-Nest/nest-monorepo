export type FormProps<T> = {
  index: number;
  formData: T;
};

export class TextFormData {
  type: string = "Text";
  constructor(public text: string) {}
}

export class TitleFormData {
  type: string = "Title";
  constructor(public text: string) {}
}

export class ImageFormData {
  type: string = "Image";
  constructor(public src: string, public alt?: string) {}
}

export class SocialFormData {
  type: string = "Social";
  constructor(public src: string) {}
}

export type FormData = TextFormData | TitleFormData | ImageFormData;

export type CustomElement = {
  key: string;
  formData: FormData;
};
