import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function DeckForm({ deck, submitDeck, routeTo }) {
  const history = useHistory();
  const [formData, setFormData] = useState(deck);

  useEffect(() => {
    setFormData(deck);
  }, [deck]);

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await submitDeck(formData);
    console.log({ routeTo });
    history.push(routeTo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          placeholder="Deck Name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          className="form-control"
          placeholder="Brief description of the deck"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <button type="button" className="btn btn-secondary mr-2" onClick={() => history.push(routeTo)}>
        Cancel
      </button>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default DeckForm;
