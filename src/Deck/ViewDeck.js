import React, { useEffect, useState } from "react";
import { deleteCard, readDeck } from "../utils/api";
import { Link, useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import BreadCrumb from "../BreadCrumb";
import Cards from "../Card/Cards";

function ViewDeck({ removeDeck }) {
  const { deckId } = useParams();
  const [deck, setDeck] = useState("");
  const history = useHistory();
  const [cards, setCards] = useState([]);


  useEffect(() => {
    async function loadDeck() {
      const response = await readDeck(deckId);
      setDeck(response);
      setCards(response.cards);

    }
    loadDeck();
  }, [deckId]); // Specify decikId as a dependency

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this deck?")) {
      removeDeck(deck.id);
    }
    history.push("/");
  }

  async function removeCard(cardId) {
    await deleteCard(cardId);
    setCards(cards.filter((card) => card.id !== cardId));
  }

  return (
    <>
      <BreadCrumb />

      <h2>{deck.name}</h2>
      <p>{deck.description}</p>

      <Link className="btn bg-secondary text-white" to={`/decks/${deck.id}/edit`}>
        Edit
      </Link >

      <Link className="btn bg-primary text-white" to={`/decks/${deck.id}/study`}>
        Study
      </Link>

      <Link className="btn bg-primary text-white" to={`/decks/${deck.id}/cards/new`}>
        Add Card
      </Link>

      <button className="btn bg-danger" onClick={handleDelete}>Delete</button>

      <Cards cards={cards} removeCard={removeCard} />
    </>
  );
}


export default ViewDeck;
