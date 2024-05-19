import React from "react";

function Card({ card, removeCard }) {
  const handleDelete = () => {
    // Delete the card
    if (window.confirm("Are you sure you want to delete this deck?")) {
      removeCard(card.id);
    }
  }

  return (
    <>
      <article className="card">
        <p>Front: {card.front}</p>
        <p>Back: {card.back}</p>
        <button className="btn bg-secondary">Edit</button>
        <button className="btn bg-danger" onClick={handleDelete}>Delete</button>
        {/* On clicking the delete above we should remove a card but...
            will that rerender what i want.. if i want it to rerender the view deck */}
      </article>
    </>
  );
}

export default Card;
