import React, { useEffect, useState } from "react";
import Deck from "./Deck";

function Decks({ decks }) {

  return (
    <>
      {decks && decks.map(deck => {
        return (
          <Deck deck={deck} />
        );
      })}
    </>
  );
}


export default Decks;
