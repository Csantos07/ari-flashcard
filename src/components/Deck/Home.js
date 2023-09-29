import React from "react";
import { Link } from 'react-router-dom';

function Home({ decks, cards, handleDeckDelete }) {
  const cardCount = id => {
    const result = cards.filter(card => id === card.deckId);
    return result.length;
  };

  const decksList = decks.map(deck => (
    <div
      className='card'
      key={deck.id}
    >
      <div className='card-body'>
        <div className='d-flex justify-content-between'>
          <h5 className='card-title'>{deck.name}</h5>
          <p>{cardCount(deck.id)} cards</p>
        </div>
        <p className='card-text'>{deck.description}</p>
        <div className='d-flex justify-content-between'>
          <div>
            <Link
              to='#'
              className='btn btn-secondary deck-btn-1'
            >
              View
            </Link>
            <Link
              to={`/decks/${deck.id}/study`}
              className='btn btn-primary'
            >
              Study
            </Link>
          </div>
          <button
            onClick={handleDeckDelete}
            className='btn btn-danger'
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <button
        type='button'
        className='btn btn-secondary mb-2'
      >
        Create Deck
      </button>
      {decksList}
    </>
  );
}

export default Home;
