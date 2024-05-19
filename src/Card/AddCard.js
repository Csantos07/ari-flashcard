import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { createCard, readDeck } from "../utils/api";


function AddCard() {
  let { deckId } = useParams();
  const [deck, setDeck] = useState("");
  const initialFormState = { front: "", back: "", };
  const [formData, setFormData] = useState(initialFormState);
  const history = useHistory();


  useEffect(() => {
    const loadDeck = async () => {
      const response = await readDeck(deckId);
      setDeck(response);
    }
    loadDeck();

  }, [deckId]);

  function handleChange({ target }) {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault()
    createCard(deckId, formData);
    setFormData(initialFormState);
    // Handle form submission
  }

  function handleDone() {
    history.push(`/decks/${deckId}`)
  }

  return (
    <>
      <h2>{deck.name}: Add Card</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="front" className="form-label">Front</label>
          <textarea
            className="form-control"
            id="front"
            name="front"
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="back" className="form-label">Back</label>
          <textarea
            className="form-control"
            id="back"
            name="back"
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button className="btn btn-secondary" onClick={handleDone}>Done</button>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </>
  );
}



export default AddCard;
