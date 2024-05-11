import React, { useEffect, useState } from "react";
import { readDeck } from "../utils/api";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import BreadCrumb from "../BreadCrumb";

function ViewDeck() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState("");

  useEffect(() => {
    async function loadDeck() {
      const response = await readDeck(deckId);
      setDeck(response);

    }
    loadDeck();
  }, [deckId]); // Specify decikId as a dependency
  return (
    <>
      <BreadCrumb />

      <h2>{deck.name}</h2>
      <p>{deck.description}</p>

      <Link className="btn bg-secondary text-white" to="#">
        Edit
      </Link>
      <Link className="btn bg-primary text-white" to={`/decks/${deck.id}/study`}>
        Study
      </Link>
      <Link className="btn bg-primary text-white" to="#">
        Add Cards
      </Link>
      <button className="btn bg-danger">Delete</button>

      <section>
        {deck.cards && (
          <>
            <h3>Cards</h3>
            {deck.cards.map((card) => (
              <article className="card" key={card.id}>
                <p>Front: {card.front}</p>
                <p>Back: {card.back}</p>
                <button className="btn bg-secondary">Edit</button>
                <button className="btn bg-danger">Delete</button>
              </article>
            ))}
          </>
        )}
      </section >
    </>
  );
}


export default ViewDeck;
