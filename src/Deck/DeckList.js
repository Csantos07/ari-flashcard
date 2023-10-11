import React from 'react';
import Deck from './Deck';

function DeckList({ decks, setDecks }) {
  return (
    <>
      {decks.map((deck, key) => (<Deck key={key} deck={deck} setDecks={setDecks} />))}
    </>
  );
}

export default DeckList;
