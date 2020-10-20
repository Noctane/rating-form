import { useState, useEffect } from 'react';

type TCallBack = (data: IFormValues) => void;
type TValidate = (val: IFormValues) => ErrorsType;

function useForm(callback: TCallBack, validate: TValidate) {
  const initialValues = {
    rating: 0,
    email: '',
    address: '',
    cp: '',
    city: '',
    date: '',
    message: '',
    file: null
  }
  const [values, setValues] = useState<IFormValues>(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback(values);
      setIsSubmitting(false);
    }
  }, [callback, errors, isSubmitting, values]);

  const handleSubmit = (event: React.MouseEvent) => {
    if (event) event.preventDefault();
    setIsSubmitting(true);
    setErrors(validate(values));
  };

  const handleBlur = () => {
    setErrors(validate(values));
  };

  const handleFocus = () => {
    setErrors({});
  };

  const handleImageChange = (event: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    event.persist();
    const { name, files } = event.target as HTMLInputElement;
    let photo: any;
    if (files) {
      photo = files[0]
    }
    setValues(val => ({
      ...val,
      [name]: photo,
    }));
  }

  const handleChange = (event: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    event.persist();
    const { value, name } = event.target as HTMLInputElement | HTMLTextAreaElement;
    setValues(val => ({
      ...val,
      [name]: value,
    }));
  };

  const reset = () => {
    setValues(initialValues);
  }

  return {
    handlers: {
      handleImageChange,
      handleChange,
      handleSubmit,
      handleBlur,
      handleFocus,
      reset,
    },
    values,
    setValues,
    errors,
  };
};

export default useForm;
