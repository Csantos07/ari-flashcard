import React from "react";
import Deck from ".";

function Decks({ decks, removeDeck }) {

  return (
    <>
      {decks && decks.map((deck, id) => (
        <Deck key={id} deck={deck} removeDeck={removeDeck} />
      ))}
    </>
  );
}


export default Decks;
