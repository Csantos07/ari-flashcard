import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { readDeck } from '../../utils/api';

function Study({ cards }) {
  const { deckId } = useParams();
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    readDeck(deckId)
      .then(res => setDeck(res))
      .catch(err => console.log(err));
  }, [deckId]);

  return (
    <>
      <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='breadcrumb-item'>
            <Link to='/decks/:deckId'>{deck.name}</Link>
          </li>
          <li
            className='breadcrumb-item active'
            aria-current='page'
          >
            Study
          </li>
        </ol>
      </nav>
      <h1>Study: {deck.name}</h1>
      <div class='card'>
        <div class='card-body'>
          <h5 className='card-title'>Card 1 of 3</h5>
          <p className='card-text'>
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <Link
            to='#'
            className='btn btn-secondary'
          >
            Flip
          </Link>
        </div>
      </div>
    </>
  );
}

export default Study;
