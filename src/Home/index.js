import React from 'react';
import DeckList from '../Deck/DeckList';

function Home({ decks }) {
  return (
    <>
      <button className="btn btn-secondary mb-4">Create Deck</button>

      <DeckList decks={decks} />
    </>
  );
}

export default Home;
