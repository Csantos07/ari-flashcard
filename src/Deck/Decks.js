import React, { useEffect, useState } from "react";
import Deck from ".";

function Decks({ decks, removeDeck }) {

  return (
    <>
      {decks && decks.map(deck => {
        return (
          <Deck deck={deck} removeDeck={removeDeck} />
        );
      })}
    </>
  );
}


export default Decks;
