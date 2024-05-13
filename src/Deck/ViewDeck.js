import React, { useEffect, useState } from "react";
import { readDeck } from "../utils/api";
import { Link, useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import BreadCrumb from "../BreadCrumb";

function ViewDeck({ removeDeck }) {
  const { deckId } = useParams();
  const [deck, setDeck] = useState("");
  const history = useHistory();

  useEffect(() => {
    async function loadDeck() {
      const response = await readDeck(deckId);
      setDeck(response);

    }
    loadDeck();
  }, [deckId]); // Specify decikId as a dependency

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this deck?")) {
      removeDeck(deck.id);
    }
    history.push("/");

  }

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
      <button className="btn bg-danger" onClick={handleDelete}>Delete</button>

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
