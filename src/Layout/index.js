import React, { useEffect, useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { deleteDeck, listDecks } from "../utils/api";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Study from "../Study";
import ViewDeck from "../Deck/ViewDeck";
import CreateDeck from "../Deck/CreateDeck";
import Home from "../Home";

function Layout() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    async function loadDeck() {
      const response = await listDecks();
      setDecks(response);
    }
    loadDeck();

  }, [])


  function addDeck(newDeck) { // Add a new deck to the list of decks
    setDecks([...decks, newDeck]);
  }

  function removeDeck(deckId) {
    setDecks(decks.filter((deck) => deck.id !== deckId));
    deleteDeck(deckId);
  }

  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <Home decks={decks} removeDeck={removeDeck} />
          </Route>
          <Route exact path="/decks/new">
            <CreateDeck addDeck={addDeck} />
          </Route>
          <Route exact path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route exact path="/decks/:deckId/">
            <ViewDeck removeDeck={removeDeck} />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}


export default Layout;
