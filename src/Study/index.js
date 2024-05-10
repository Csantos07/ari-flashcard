import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../utils/api";

// There is some refactoring to do here.
// A card component could be extracted from this component.
function Study() {

  const { deckId } = useParams();
  const [cardNumber, setCardNumber] = useState(1);
  const [deck, setDeck] = useState("");
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    async function loadDeck() {
      const response = await readDeck(deckId);
      setDeck(response);
    }
    loadDeck();
  }, [deckId]); // Specify decikId as a dependency

  function flipCard() {
    setFlipped(!flipped);
  }

  function next() {
    if (cardNumber === deck.cards.length) {
      if (window.confirm("Restart cards?")) {
        setCardNumber(1);
      }
    } else {
      setCardNumber(cardNumber + 1);
    }
    setFlipped(false);
  }

  return (
    <>
      <section className="card">
        {deck.cards && (
          <>
            <h2>Study: {deck.name}</h2>
            <h3>Card {cardNumber} of {deck.cards.length}</h3>
            <p>{flipped ? deck.cards[cardNumber - 1].back : deck.cards[cardNumber - 1].front}</p>
          </>
        )}
        <button className="btn bg-secondary" onClick={flipCard}>Flip</button>
        {flipped && <button className="btn bg-primary" onClick={next}>Next</button>}
      </section>

    </>
  );
}

export default Study;
