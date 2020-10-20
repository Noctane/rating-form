import tw from 'twin.macro';
import React from 'react';

interface FormFieldProps {
  className?: string;
  labelMessage: string;
  name: string;
  type: 'email' | 'text' | 'date' | 'textarea';
  placeholder: string;
}

export const Input = tw.input`
  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
`;

export const Label = tw.label`
  block text-gray-700 text-sm font-bold mb-2
`;

export const TextArea = tw.textarea`
  shadow appearance-none border rounded w-full h-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
`;

function FormField({
  labelMessage,
  name,
  type,
  placeholder,
  className,
}: FormFieldProps) {
  return (
    <div className={`my-3 ${className}`}>
      <Label htmlFor={name}>{labelMessage}</Label>
      {type === 'textarea' ? (
        <TextArea name={name} placeholder={placeholder} />
      ) : (
        <Input name={name} type={type} placeholder={placeholder} />
      )}
    </div>
  );
}

export default FormField;
