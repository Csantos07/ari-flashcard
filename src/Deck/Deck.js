import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Deck({ deck }) {

  return (
    <>
      <section className="card">
        <h4>{deck.name}</h4>
        <p>{deck.description}</p>
        <button className="bg-secondary">View</button>
        <Link className="bg-primary text-white" to={`decks/${deck.id}/study`}>
          Study
        </Link>

        <button className="bg-danger">Delete</button>
      </section >
    </>
  );
}


export default Deck;
