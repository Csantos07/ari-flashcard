import React, { useEffect, useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../Home";
import { listDecks } from "../utils/api";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";


function Layout() {
  const [decks, setDecks] = useState(null);

  useEffect(function () {
    async function fetchDecks() {
      let response = await listDecks();

      setDecks(response);
      console.log(response);
    }

    fetchDecks();
  }, []);


  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}

        {/* We will eventually use react router to render our pages here */}
        {/* For the time being lets get started with Rendering a home component */}
        {/* The home component should have: */}
        {/*   - create deck button */}
        {/*   - show existing decks */}
        <Switch>
          <Route exact path="/">
            {decks && < Home decks={decks} />}
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
