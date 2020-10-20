import React from 'react';
import { Input, Label, TextArea, ErrorSpan } from './styles';

interface FormFieldProps {
  className?: string;
  labelMessage: string;
  name: string;
  type: 'email' | 'text' | 'date' | 'textarea' | 'file';
  placeholder?: string;
  isRequired?: boolean;
  onChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onBlur: () => void;
  onFocus: () => void;
  value: string | number;
  errors: ErrorsType;
}

function FormField({
  labelMessage,
  name,
  type,
  placeholder,
  className,
  isRequired,
  onChange,
  onBlur,
  onFocus,
  value,
  errors,
}: FormFieldProps) {
  return (
    <div className={`my-3 ${className}`}>
      <Label htmlFor={name}>{labelMessage}</Label>
      {type === 'textarea' ? (
        <TextArea
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          required={isRequired}
          value={value}
        />
      ) : (
        <Input
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          required={isRequired}
          value={value}
        />
      )}
      {errors.hasOwnProperty(name) && <ErrorSpan>{errors[name]}</ErrorSpan>}
    </div>
  );
}

export default FormField;
