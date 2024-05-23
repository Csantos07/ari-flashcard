import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../utils/api";
import BreadCrumb from "../BreadCrumb";
import StudyCards from "./StudyCards";
import NotEnoughCards from "./NotEnoughCards";
import BreadCrumbTwo from "../BreadCrumbTwo";

function Study() {

  const { deckId } = useParams();
  const [deck, setDeck] = useState(null);


  useEffect(() => {
    async function loadDeck() {
      const response = await readDeck(deckId);
      setDeck(response);
    }
    loadDeck();
  }, [deckId]);


  // This looks a little funky with the if here. Consider a more react conventional way to handle this
  // If it is not best practice, what would be a better way to handle this?
  if (!deck) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* <BreadCrumb /> */}
      <BreadCrumbTwo deck={deck} />
      <h2>Study: {deck.name}</h2>
      {deck.cards.length < 3 ? (
        <NotEnoughCards deck={deck} />
      ) : (
        <StudyCards cards={deck.cards} />
      )}
    </>
  );
}

export default Study;
