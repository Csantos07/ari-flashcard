import React, { useEffect, useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { listDecks } from "../utils/api";
import Decks from "../Deck/Decks";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Study from "../Study";

function Layout() {
  const [decks, setDecks] = useState([]);

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
            <button>Create Deck</button>
            <Decks decks={decks} />
          </Route>
          <Route exact path="/decks/:deckId/study">
            <Study />
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
