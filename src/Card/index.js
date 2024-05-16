import React from "react";

function Card({ card }) {
  return (
    <>
      <article className="card">
        <p>Front: {card.front}</p>
        <p>Back: {card.back}</p>
        <button className="btn bg-secondary">Edit</button>
        <button className="btn bg-danger">Delete</button>
        {/* On clicking the delete above we should remove a card but...
            will that rerender what i want.. if i want it to rerender the view deck */}
      </article>
    </>
  );
}

export default Card;
