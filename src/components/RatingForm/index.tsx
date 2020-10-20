import React, { useState } from 'react';
import FormField from '../FormField';
import Rater from '../Rater';

export function RatingForm() {
  return (
    <form>
      <Rater />
      <FormField
        labelMessage="Adresse email"
        type="email"
        name="email"
        placeholder="arnaud.prat@gmail.com"
      />
      <FormField
        labelMessage="Adresse postale"
        type="text"
        name="address"
        placeholder="114 chemin de la peyrette"
      />
      <div className="flex justify-between">
        <FormField
          labelMessage="Code postal"
          type="text"
          name="cp"
          placeholder="31170"
          className="w-1/2 mr-2"
        />
        <FormField
          labelMessage="Ville"
          type="text"
          name="city"
          placeholder="Tournefeuille"
          className="w-1/2 ml-2"
        />
      </div>
      <FormField
        labelMessage="Date des travaux"
        type="date"
        name="date"
        placeholder="jj/mm/aaaa"
      />
      <FormField
        labelMessage="Message"
        type="textarea"
        name="message"
        placeholder="Votre message..."
      />
    </form>
  );
}
