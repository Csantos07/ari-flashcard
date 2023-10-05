import React from 'react';

function Deck({ deck }) {
  return (
    <>
      <section className='card p-4'>
        <section className='d-flex justify-content-between'>
          <h3>{deck.name}</h3>
          <span>{deck.cards.length} Cards</span>
        </section>

        <p>{deck.description}</p>

        <section className='d-flex justify-content-between'>
          <section className='left-section'>
            <button className="btn btn-primary mr-2">View</button>
            <button className="btn btn-secondary">Study</button>
          </section>
          <section className='right-section'>
            <button className="btn btn-danger mb-4">Delete</button>
          </section>
        </section>
      </section>
    </>
  );
}

export default Deck;
