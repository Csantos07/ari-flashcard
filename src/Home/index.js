import React from 'react';

function Home({ decks }) {
  if (decks && decks[0]) {
    return (
      <>
        <h2>{ }</h2>
        <div className='card'>
          <p>{decks[0].cards[0].front}</p>
        </div>
      </>
    );
  } else {
    return null;
  }
}

export default Home;
