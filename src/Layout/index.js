import React, { useEffect, useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { listDecks } from "../utils/api";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Study from "../Study";
import ViewDeck from "../Deck/ViewDeck";
import CreateDeck from "../Deck/CreateDeck";
import Home from "../Home";

function Layout() {
  const [decks, setDecks] = useState([]);
  const addDeck = (newDeck) => {
    setDecks([...decks, newDeck]);
  };

  useEffect(() => {
    async function loadDeck() {
      const response = await listDecks();
      setDecks(response);
    }
    loadDeck();

  }, [])

  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <Home decks={decks} />
          </Route>
          <Route exact path="/decks/new">
            <CreateDeck addDeck={addDeck} />
          </Route>
          <Route exact path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route exact path="/decks/:deckId/">
            <ViewDeck />
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
