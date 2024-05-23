import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { readDeck, updateDeck } from "../utils/api";
import DeckForm from "./DeckForm";
import BreadCrumbTwo from "../BreadCrumbTwo";

function EditDeck({ editDeck }) {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({ name: "", description: "" });

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck);
    return () => abortController.abort();
  }, [deckId]);


  const handleSubmit = async (deck) => {
    const updatedDeck = await updateDeck(deck);
    editDeck(updatedDeck);
  };


  let routeTo = `/decks/${deckId}`;

  return (
    <>
      <BreadCrumbTwo deck={deck} />
      <h1>Edit Deck</h1>

      <DeckForm deck={deck} submitDeck={handleSubmit} routeTo={routeTo} />
    </>
  );
}

export default EditDeck;
