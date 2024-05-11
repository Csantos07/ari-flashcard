import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Deck({ deck }) {

  return (
    <>
      <section className="card">
        <h4>{deck.name}</h4>
        <p>{deck.description}</p>

        <Link className="btn bg-secondary text-white" to={`decks/${deck.id}`}>
          View
        </Link>
        <Link className="btn bg-primary text-white" to={`decks/${deck.id}/study`}>
          Study
        </Link>
        <button className="btn bg-danger">Delete</button>
      </section >
    </>
  );
}


export default Deck;
