import React, { useEffect, useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../Home";
import CreateDeckForm from "../Deck/CreateDeckForm";
import { listDecks } from "../utils/api";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";


function Layout() {
  const [decks, setDecks] = useState(null);
  useEffect(function () {
    async function fetchDecks() {
      let response = await listDecks();

      setDecks(response);
    }
    fetchDecks();
  }, []);


  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            {decks && < Home decks={decks} setDecks={setDecks} />}
          </Route>
          <Route exact path="/decks/new">
            <CreateDeckForm setDecks={setDecks} />
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
