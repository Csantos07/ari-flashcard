import React from "react";
import Decks from "../Deck/Decks";
import { Link } from "react-router-dom";


function Home({ decks, removeDeck }) {
  return (
    <>
      <Link className="btn bg-secondary " to="/decks/new">
        Create Deck
      </Link>

      <Decks decks={decks} removeDeck={removeDeck} />
    </>
  );
}


export default Home;
