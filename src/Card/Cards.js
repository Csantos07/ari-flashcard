import React from "react";
import Card from ".";

function Cards({ cards, removeCard }) {
  return (
    <>
      {cards && (
        <>
          <h3>Cards</h3>
          {cards.map((card) => (
            <Card key={card.id} card={card} removeCard={removeCard} />
          ))}
        </>
      )}
    </>
  );
}



export default Cards;
