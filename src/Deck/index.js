import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import { deleteDeck } from "../utils/api";

function Deck({ deck, removeDeck }) {

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this deck?")) {
      removeDeck(deck.id);
    }
  }

  return (
    <>
      <section className="card">
        <h4>{deck.name}</h4>
        <p>{deck.description}</p>

        <Link className="btn bg-secondary text-white" to={`/decks/${deck.id}`}>
          View
        </Link>
        <Link className="btn bg-primary text-white" to={`/decks/${deck.id}/study`}>
          Study
        </Link>
        <button className="btn bg-danger" onClick={handleDelete}>Delete</button>
      </section >
    </>
  );
}


export default Deck;
