import React from 'react';
import Deck from './Deck';

function DeckList({ decks }) {
  return (
    <>
      {decks.map((deck, key) => (<Deck key={key} deck={deck} />))}
    </>
  );
}

export default DeckList;
