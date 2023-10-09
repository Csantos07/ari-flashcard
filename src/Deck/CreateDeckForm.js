import React, { useState } from 'react';
import { createDeck } from '../utils/api';

function CreateDeckForm() {

  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    createDeck(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstName'>Name:</label>
        <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleInputChange}
          placeholder='Deck Name'
          required
        />
        <br />
        <label htmlFor='Description'>Description:</label>
        <input
          type='text'
          id='description'
          name='description'
          value={formData.description}
          onChange={handleInputChange}
          placeholder='Brief Description of the Deck'
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default CreateDeckForm;
