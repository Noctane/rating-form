interface IFormValues {
  rating: number | string;
  email: string;
  address: string;
  cp: string;
  city: string;
  date: string;
  message: string;
  file: File | null;
  [key: string]: any;
}

type ErrorsType = {
  [key: string]: string
}