import React from "react";
import Decks from "../Deck/Decks";
import { Link } from "react-router-dom";


function Home({ decks }) {
  return (
    <>
      <Link className="btn bg-secondary " to="/decks/new">
        Create Deck
      </Link>

      <Decks decks={decks} />
    </>
  );
}


export default Home;
