import React from 'react';
import DeckList from '../Deck/DeckList';
import { Link } from 'react-router-dom';

function Home({ decks, setDecks }) {
  return (
    <>

      <Link to="/decks/new">
        <button className="btn btn-secondary mb-4">Create Deck</button>
      </Link>


      <DeckList decks={decks} setDecks={setDecks} />
    </>
  );
}

export default Home;
