import React from 'react';
import { deleteDeck } from '../utils/api';
import { useHistory } from 'react-router-dom/';

function Deck({ deck, setDecks }) {
  const history = useHistory();

  const handleClick = (event) => {
    event.preventDefault();
    deleteDeck(deck.id);
    setDecks((currentDecks) =>
      currentDecks.filter((currentDeck) => currentDeck.id !== deck.id)
    );

    history.push('/');
  }
  return (
    <>
      <section className='card p-4'>
        <section className='d-flex justify-content-between'>
          <h3>{deck.name}</h3>
          <span>{deck.cards.length} cards</span>
        </section>

        <p>{deck.description}</p>

        <section className='d-flex justify-content-between'>
          <section className='left-section'>
            <button className="btn btn-primary mr-2">View</button>
            <button className="btn btn-secondary">Study</button>
          </section>
          <section className='right-section'>
            <button onClick={handleClick} className="btn btn-danger mb-4">Delete</button>
          </section>
        </section>
      </section>
    </>
  );
}

export default Deck;
