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

  function removeCard(cardId) {
    setCards(cards.filter((card) => card.id !== cardId));
    deleteCard(cardId);
  }

  // Would I want to create another delete function here?
  // If i need to delete a card and have the rest of the cards rerender how do i do that

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

      <Link className="btn bg-primary text-white" to={`/decks/${deck.id}/cards/new`}>
        Add Card
      </Link>

      <button className="btn bg-danger" onClick={handleDelete}>Delete</button>

      <Cards cards={cards} removeCard={removeCard} />


      {/* What I'm pondering is how do I pull out the Cards/Card components */}
      {/* Cards */}
    </>
  );
}


export default ViewDeck;
