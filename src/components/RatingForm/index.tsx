import React from 'react';
import useForm from '../../hooks/useForm';
import validate from '../../utils/validationRules';
import FormField from '../FormField';
import Rater from '../Rater';
import { Label } from '../FormField/styles';
import api from '../../utils/api';

export function RatingForm() {
  const sendData = (data: IFormValues) => {
    const formData = new FormData();
    Object.keys(data).map((k) => formData.append(k, data[k]));

    api('http://localhost:3000', formData).then((data) =>
      console.log('success')
    );
  };

  const { values, handlers, errors, setValues } = useForm(sendData, validate);

  const onChangeRating = (rating: number | string) => {
    setValues((val) => ({
      ...val,
      rating: rating,
    }));
  };

  return (
    <form>
      <Rater
        isRequired
        name="rating"
        value={values.rating}
        onChangeRating={onChangeRating}
      />
      <FormField
        labelMessage="Adresse email"
        type="email"
        name="email"
        placeholder="arnaud.prat@gmail.com"
        onChange={handlers.handleChange}
        onFocus={handlers.handleFocus}
        onBlur={handlers.handleBlur}
        isRequired
        value={values.email}
        errors={errors}
      />
      <FormField
        labelMessage="Adresse postale"
        type="text"
        name="address"
        placeholder="114 chemin de la peyrette"
        onChange={handlers.handleChange}
        onFocus={handlers.handleFocus}
        onBlur={handlers.handleBlur}
        isRequired
        value={values.address}
        errors={errors}
      />
      <div className="flex justify-between">
        <FormField
          labelMessage="Code postal"
          type="text"
          name="cp"
          placeholder="31170"
          className="w-1/2 mr-2"
          onChange={handlers.handleChange}
          onFocus={handlers.handleFocus}
          onBlur={handlers.handleBlur}
          isRequired
          value={values.cp}
          errors={errors}
        />
        <FormField
          labelMessage="Ville"
          type="text"
          name="city"
          placeholder="Tournefeuille"
          className="w-1/2 ml-2"
          onChange={handlers.handleChange}
          onFocus={handlers.handleFocus}
          onBlur={handlers.handleBlur}
          isRequired
          value={values.city}
          errors={errors}
        />
      </div>
      <FormField
        labelMessage="Date des travaux"
        type="date"
        name="date"
        placeholder="jj/mm/aaaa"
        onChange={handlers.handleChange}
        onFocus={handlers.handleFocus}
        onBlur={handlers.handleBlur}
        isRequired
        value={values.date}
        errors={errors}
      />
      <FormField
        labelMessage="Message"
        type="textarea"
        name="message"
        placeholder="Votre message..."
        onChange={handlers.handleChange}
        onFocus={handlers.handleFocus}
        onBlur={handlers.handleBlur}
        isRequired
        value={values.message}
        errors={errors}
      />
      <div className="my-3">
        <Label htmlFor="file">Une petite photo ?</Label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="file"
          name="file"
          onChange={handlers.handleImageChange}
        />
      </div>
      <div className="flex justify-center mt-8">
        <button
          disabled={Object.keys(errors).length > 0}
          className="py-2 px-4 bg-green-500 text-white rounded shadow hover:bg-opacity-75"
          onClick={handlers.handleSubmit}
        >
          Envoyer !
        </button>
      </div>
    </form>
  );
}
